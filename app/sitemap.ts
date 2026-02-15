import type { MetadataRoute } from "next";
import { HERBS } from "./herbs/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jwfarms7.com";
  const now = new Date();

  // =========================
  // CORE SITE PAGES
  // =========================
  const staticRoutes = [
    "",
    "/lavender",
    "/lavender/knowledge",
    "/downloadable-guides",
    "/lavender-farm-tennessee",
    "/herbal-learning-library",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1.0
        : path === "/herbal-learning-library"
        ? 0.9
        : 0.8,
  }));

  // =========================
  // HERB DETAIL PAGES
  // =========================
  const herbRoutes = HERBS.map((herb) => ({
    url: `${baseUrl}/herbs/${herb.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...herbRoutes];
}
