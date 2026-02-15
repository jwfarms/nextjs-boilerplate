// app/sitemap.ts
import type { MetadataRoute } from "next";
import { HERBS } from "./herbs/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jwfarms7.com";
  const now = new Date();

  // Existing static routes (KEEPING YOUR STRUCTURE)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/lavender`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lavender/knowledge`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downloadable-guides`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lavender-farm-tennessee`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/herbal-learning-library`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic herb pages
  const herbRoutes: MetadataRoute.Sitemap = HERBS.map((herb) => ({
    url: `${baseUrl}/herbs/${herb.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...herbRoutes];
}
