import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.jwfarms7.com/",
      lastModified: new Date(),
    },
  ];
}
