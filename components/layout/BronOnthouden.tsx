"use client";

import { useEffect } from "react";
import { onthoudBron, onthoudLanding } from "@/lib/formulierdienst";

/* Legt bij de eerste paginaweergave van een bezoek de bron (utm, gclid,
   externe verwijzer) en de landingspagina vast in sessionStorage. Het
   formulier stuurt ze mee bij een aanvraag. Geen cookies, niets naar
   derden: het blijft in de browser tot het tabblad dicht gaat. */
export function BronOnthouden() {
  useEffect(() => {
    onthoudBron();
    onthoudLanding();
  }, []);
  return null;
}
