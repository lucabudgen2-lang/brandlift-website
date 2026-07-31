import { buildPageMetadata } from "@/lib/metadata";
import { CityPage } from "@/components/sections/CityPage";
import { cities } from "@/lib/cities";

const city = cities.utrecht;

export const metadata = buildPageMetadata({
  title: city.metaTitle,
  description:
    city.metaDescription,
  path: `/${city.slug}`,
});

export default function Page() {
  return <CityPage city={city} />;
}
