import type { Metadata } from "next";
import { CityPage } from "@/components/sections/CityPage";
import { cities } from "@/lib/cities";

const city = cities.rotterdam;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: `/${city.slug}` },
};

export default function Page() {
  return <CityPage city={city} />;
}
