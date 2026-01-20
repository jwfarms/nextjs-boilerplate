import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jwfarms7.com";

  // Add every important page here (especially new pages you want indexed)
  const routes = [
    "",
    "/lavender",
    "/lavender/knowledge",
    "/downloadable-guides",
    "/lavender-farm-tennessee",
  ];

  const now = new Date();

  return routes.map((path) => {
    const url = `${baseUrl}${path}`;

    // Simple priority rules
    const priority =
      path === ""
        ? 1.0
        : path === "/lavender"
        ? 0.9
        : path === "/lavender/knowledge"
        ? 0.8
        : path === "/downloadable-guides"
        ? 0.8
        : path === "/lavender-farm-tennessee"
        ? 0.8
        : 0.7;

    // Simple changeFrequency rules
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "" ? "weekly" : "monthly";

    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}
