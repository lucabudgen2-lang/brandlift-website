/**
 * Formulierdienst van Brandlift (forms.brandliftagency.nl, code in de vault systeem/forms), 14-11-2026.
 * Vervangt Web3Forms. De dienst bewaart elke aanvraag eerst (Cloudflare D1, EU) en mailt hem dan naar
 * luca@brandliftagency.nl, met als antwoordadres het e-mailadres van de bezoeker. Mislukt die mail, dan
 * probeert de dienst het opnieuw en komt er een melding: er raakt niets kwijt.
 *
 * Twee sleutels in de dienst (systeem/forms/src/sites.json): `brandlift` (groeigesprek: naam, telefoon en
 * e-mail verplicht) en `brandlift-calculator` (alleen e-mail). Zo telt het OS ze ook apart.
 *
 * Spamweer: lokveld `_gotcha` (onzichtbaar, moet leeg blijven), invultijd `_duur` en Cloudflare Turnstile
 * (laadt pas bij de eerste aanraking van een formulier, meestal onzichtbaar). Alleen een 200 met `ok: true`
 * telt als verstuurd; al het andere is een eerlijke foutmelding, en de invoer blijft staan.
 */
export const FORMULIER_BASIS = "https://forms.brandliftagency.nl/v1/";
/** Openbare sitekey van de Turnstile-widget "Brandlift formulieren" (geen geheim). */
export const TURNSTILE_SITEKEY = "0x4AAAAAAGAXmO5zqgqd0E5J";

type Ts = { render: (el: HTMLElement, o: object) => string; reset: (id: string) => void };
let tsLaden: Promise<void> | null = null;
const ts = () => (window as unknown as { turnstile?: Ts }).turnstile;
const starts = new WeakMap<HTMLFormElement, number>();

function laadTurnstile(): Promise<void> {
  tsLaden ??= new Promise((klaar) => {
    const sc = document.createElement("script");
    sc.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    sc.async = true;
    sc.onload = () => klaar();
    sc.onerror = () => klaar(); // geblokkeerd: dan weigert de dienst en ziet de bezoeker de foutmelding
    document.head.append(sc);
  });
  return tsLaden;
}

/** Op de eerste aanraking (onFocusCapture): starttijd vastleggen en de widget klaarzetten in `[data-turnstile]`. */
export async function bijAanraking(form: HTMLFormElement) {
  if (!starts.has(form)) starts.set(form, Date.now());
  onthoudBron();
  const vak = form.querySelector<HTMLElement>("[data-turnstile]");
  if (!TURNSTILE_SITEKEY || !vak || vak.dataset.widget) return;
  vak.dataset.widget = "bezig";
  await laadTurnstile();
  const t = ts();
  if (!t) { delete vak.dataset.widget; return; }
  vak.dataset.widget = t.render(vak, { sitekey: TURNSTILE_SITEKEY, appearance: "interaction-only", language: "nl", "refresh-expired": "auto" });
}

async function token(form: HTMLFormElement): Promise<string> {
  await bijAanraking(form);
  for (let i = 0; i < 40; i++) {
    const v = form.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]')?.value;
    if (v) return v;
    await new Promise((r) => setTimeout(r, 250));
  }
  return "";
}

/* bron van het bezoek (utm/gclid/verwijzer), alleen in deze sessie.
   Wordt vastgelegd bij de EERSTE paginaweergave (BronOnthouden in de layout):
   eerder gebeurde dat pas bij het aanraken van een formulier, en dan was de
   externe verwijzer na één klik binnen de site al weg. */
const BRON = "bl-bron";
const LANDING = "bl-landing";
export function onthoudBron() {
  try {
    if (sessionStorage.getItem(BRON)) return;
    const q = new URLSearchParams(window.location.search);
    const b: Record<string, string> = {};
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"]) { const v = q.get(k); if (v) b[k] = v.slice(0, 200); }
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) b._referrer = document.referrer.slice(0, 300);
    if (Object.keys(b).length) sessionStorage.setItem(BRON, JSON.stringify(b));
  } catch { /* geen opslag: dan zonder bron */ }
}
/* de eerste pagina van het bezoek, bv. een kennisbankartikel: zo zien we
   welke artikelen tot een aanvraag leiden (docs/blogstrategie-2026.md) */
export function onthoudLanding() {
  try {
    if (!sessionStorage.getItem(LANDING)) sessionStorage.setItem(LANDING, window.location.pathname.slice(0, 200));
  } catch { /* geen opslag: dan zonder landingspagina */ }
}
function landing(): Record<string, string> {
  try {
    const l = sessionStorage.getItem(LANDING);
    /* zonder underscore: de dienst bewaart dit veld dan mee en zet het in de mail */
    return l ? { landingspagina: l } : {};
  } catch { return {}; }
}
function bron(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem(BRON) || "{}"); } catch { return {}; }
}

/** Verstuurt naar de dienst. `velden`: wat in de mail moet (gebruik `naam`, `email`, `telefoon` voor de contactgegevens). */
export async function verstuur(sleutel: "brandlift" | "brandlift-calculator", velden: Record<string, string>, form: HTMLFormElement): Promise<boolean> {
  const stop = new AbortController();
  const timer = window.setTimeout(() => stop.abort(), 20000);
  try {
    const tok = await token(form);
    const start = starts.get(form);
    const lokveld = form.querySelector<HTMLInputElement>('input[name="_gotcha"]')?.value || "";
    const res = await fetch(FORMULIER_BASIS + sleutel, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...velden,
        ...(lokveld ? { _gotcha: lokveld } : {}),
        ...(start ? { _duur: String(Date.now() - start) } : {}),
        _pagina: window.location.origin + window.location.pathname,
        "cf-turnstile-response": tok,
        ...bron(),
        ...landing(),
      }),
      signal: stop.signal,
    });
    const json = await res.json().catch(() => null);
    return res.status === 200 && !!json && json.ok === true;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
    const id = form.querySelector<HTMLElement>("[data-turnstile]")?.dataset.widget;
    if (id && id !== "bezig") ts()?.reset(id); // een token werkt één keer
  }
}
