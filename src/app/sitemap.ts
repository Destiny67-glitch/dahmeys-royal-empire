import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dahmey-royal-empire.vercel.app";
  return [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/wishlist`, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/checkout`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/account`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/auth/sign-in`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
