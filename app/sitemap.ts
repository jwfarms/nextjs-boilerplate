import type { MetadataRoute } from "next";
import { HERBS } from "./herbs/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jwfarms7.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/lavender",
    "/lavender/knowledge",
    "/downloadable-guides",
    "/lavender-farm-tennessee",
    "/herbal-learning-library",
  ].map((path) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "" ? "weekly" : "monthly";

    const priority =
      path === ""
        ? 1.0
        : path === "/herbal-learning-library"
        ? 0.9
        : path === "/lavender"
        ? 0.9
        : 0.8;

    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });

  const herbRoutes: MetadataRoute.Sitemap = HERBS.map((herb) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      "monthly";

    return {
      url: `${baseUrl}/herbs/${herb.slug}`,
      lastModified: now,
      changeFrequency,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...herbRoutes];
}

