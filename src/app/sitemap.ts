import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

const routes = [
  "",
  "iptv/",
  "lista-iptv/",
  "planos/",
  "teste-gratis/",
  "blog/",
  "faq/",
  "quem-somos/",
  "contato/",
  "politica-de-privacidade/",
  "termos-de-uso/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }));
}
