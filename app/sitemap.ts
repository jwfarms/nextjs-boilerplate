import type { MetadataRoute } from "next";
import { HERBS } from "./herbs/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jwfarms7.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/lavender",
    "/lavender/knowledge",
    "/downloadable-guides",
    "/lavender-farm-tennessee",
    "/herbal-learning-library",
  ];

  const herbRoutes = HERBS.map((h) => `/herbs/${h.slug}`);

  const routes = [...staticRoutes, ...herbRoutes];

  return routes.map((path) => {
    const url = `${baseUrl}${path}`;

    const priority =
      path === ""
        ? 1.0
        : path === "/lavender"
        ? 0.9
        : path === "/herbal-learning-library"
        ? 0.85
        : path.startsWith("/herbs/")
        ? 0.7
        : 0.8;

    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "" || path === "/herbal-learning-library" ? "weekly" : "monthly";

    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}
