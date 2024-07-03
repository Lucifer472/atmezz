import { Category, footerLinks } from "@/constant";
import { getAllBlogs } from "@/lib/blog";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const blogs = await getAllBlogs();

  const blogEntries: MetadataRoute.Sitemap = blogs
    ? blogs.map((b) => ({
        url: `https://atezz.in/${b.url}`,
        lastModified: new Date(b.updatedAt),
        changeFrequency: "weekly",
        priority: 0.9,
      }))
    : [];

  const category: MetadataRoute.Sitemap = Category.map((b) => ({
    url: `https://atezz.in/${b.value}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const policy: MetadataRoute.Sitemap = footerLinks.map((b) => ({
    url: `https://atezz.in${b.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: `https://atezz.in`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...policy,
    ...category,
    ...blogEntries,
  ];
};
export default sitemap;
