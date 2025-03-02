const fs = require("fs");
const siteMetadata = {
  title: "FTS TECH - Custom Software Development & SaaS Solutions",
  description:
    "FTS TECH specializes in custom SaaS development, web applications, and software solutions. Expert JavaScript development, mobile apps, and technical consulting services.",
  keywords:
    "SaaS development, custom software, web development, JavaScript development, mobile apps, technical consulting, FTS TECH",
  author: "FTS TECH",
  siteUrl: "https://ftstech.dev", // Replace with your actual domain
  language: "en",
  social: {
    twitter: "@ftstech", // Replace with your actual Twitter handle
  },
  organization: {
    name: "FTS TECH",
    url: "https://ftstech.dev",
    logo: "/assets/img/logo.png",
    sameAs: [
      "https://twitter.com/ftstech",
      "https://linkedin.com/company/ftstech",
      // Add your other social media URLs
    ],
  },
};

const pages = [
  "", // homepage
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  // Add more pages as needed
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${siteMetadata.siteUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap generated successfully!");
};

generateSitemap();
