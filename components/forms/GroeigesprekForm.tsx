"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Vul je naam in"),
  company: z.string().min(2, "Vul je bedrijfsnaam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(6, "Vul een telefoonnummer in"),
  focus: z.string().min(1, "Kies een focus"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const focusOptions = [
  "Website laten maken",
  "Lokale SEO",
  "Branding",
  "Alles / weet ik nog niet",
];

const errCls = "mt-1 text-xs text-err";

/* Koppelt een veld aan zijn foutmelding. Zonder aria-describedby leest een
   schermlezer de melding niet voor bij het veld, en zonder aria-invalid
   weet hij niet dát er iets mis is. */
const a11y = (id: string, invalid: unknown) => ({
  "aria-invalid": invalid ? true : undefined,
  "aria-describedby": invalid ? `${id}-error` : undefined,
});

export function GroeigesprekForm({
  variant = "panel",
  tone = "dark",
}: {
  variant?: "panel" | "bare";
  tone?: "dark" | "light";
}) {
  const bare = variant === "bare";
  const light = tone === "light";
  const field = light
    ? "w-full chamf-sm border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-g500 transition-colors focus:border-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    : "w-full chamf-sm border border-[var(--color-line-strong)] bg-s2 px-4 py-3 text-paper placeholder:text-g600 transition-colors focus:border-blue-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-text focus-visible:ring-offset-2 focus-visible:ring-offset-s1";
  const label = light
    ? "mb-1.5 block text-sm font-medium text-g700"
    : "mb-1.5 block text-sm font-medium text-g300";
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      /* Web3Forms' gratis tier accepteert alleen verzoeken die echt uit een
         browser komen - een eigen server-route ertussen zetten wordt
         geweigerd (server-to-server vraagt een betaald plan). De access key
         is daarom bewust NEXT_PUBLIC en zichtbaar in de bundle; dat is hoe
         Web3Forms hem bedoelt, vergelijkbaar met Formspree's form-id. Hij
         wordt aan hun kant beperkt per domein en per aanvraagfrequentie. */
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Nieuw groeigesprek: ${values.name} (${values.company})`,
          from_name: "Brandlift website - groeigesprek",
          replyto: values.email,
          Naam: values.name,
          Bedrijf: values.company,
          "E-mail": values.email,
          Telefoon: values.phone,
          Focus: values.focus,
          Bericht: values.message || "-",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error("failed");
      setSent(true);
    } catch {
      setError("root", {
        message:
          "Er ging iets mis bij het versturen. Mail gerust rechtstreeks naar luca@brandliftagency.nl.",
      });
    }
  }

  if (sent) {
    return (
      <div className={bare ? "py-10 text-center" : light ? "chamf chamf-lg border border-ink/10 bg-white p-8 text-center" : "chamf chamf-lg border border-[var(--color-line-strong)] bg-s2 p-8 text-center"}>
        <div className="mx-auto grid h-12 w-12 place-items-center chamf-sm bg-blue text-xl text-white">
          ✓
        </div>
        <h3 className={`mt-5 text-2xl font-bold ${light ? "text-ink" : "text-paper"}`}>Bedankt - hij staat binnen.</h3>
        <p className={`mx-auto mt-3 max-w-sm text-sm leading-relaxed ${light ? "text-g600" : "text-g500"}`}>
          We nemen binnen één werkdag contact op om je gratis groeigesprek in te
          plannen. Geen salespitch, dat beloven we.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={bare ? "" : "chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-7 md:p-8"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Naam
          </label>
          <input id="name" className={field} placeholder="Voor- en achternaam" autoComplete="name" {...a11y("name", errors.name)} {...register("name")} />
          {errors.name && (
            <p id="name-error" role="alert" className={errCls}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="company">
            Bedrijf
          </label>
          <input id="company" className={field} placeholder="Bedrijfsnaam" autoComplete="organization" {...a11y("company", errors.company)} {...register("company")} />
          {errors.company && (
            <p id="company-error" role="alert" className={errCls}>
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="email">
            E-mail
          </label>
          <input id="email" type="email" className={field} placeholder="jij@bedrijf.nl" autoComplete="email" {...a11y("email", errors.email)} {...register("email")} />
          {errors.email && (
            <p id="email-error" role="alert" className={errCls}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telefoon
          </label>
          <input id="phone" type="tel" className={field} placeholder="06 - " autoComplete="tel" {...a11y("phone", errors.phone)} {...register("phone")} />
          {errors.phone && (
            <p id="phone-error" role="alert" className={errCls}>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className={label} htmlFor="focus">
          Waar wil je het over hebben?
        </label>
        <select id="focus" className={field} defaultValue="" {...a11y("focus", errors.focus)} {...register("focus")}>
          <option value="" disabled>
            Kies een focus
          </option>
          {focusOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.focus && (
          <p id="focus-error" role="alert" className={errCls}>
            {errors.focus.message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label className={label} htmlFor="message">
          Kort iets erbij <span className="text-g600">(optioneel)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          className={field}
          placeholder="Waar loop je nu tegenaan?"
          {...register("message")}
        />
      </div>

      {errors.root && (
        <p role="alert" className="mt-4 text-sm text-err">
          {errors.root.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 chamf-sm bg-blue px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-press disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Versturen…" : "Plan mijn gratis groeigesprek"}
        {!isSubmitting && <span aria-hidden>→</span>}
      </button>
      <p className={`mt-4 text-sm ${light ? "text-g600" : "text-g500"}`}>
        30 minuten · geen salespitch · eerst kijken of we waarde toevoegen
      </p>
    </form>
  );
}
