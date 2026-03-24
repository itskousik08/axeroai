const fs = require("fs");

const urls = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/contact", priority: "0.7", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/blog", priority: "0.9", changefreq: "daily" }
];

const domain = "https://axeroai.com";

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(url => {
  xml += `
  <url>
    <loc>${domain}${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
});

xml += `\n</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log("Sitemap generated ✅");
