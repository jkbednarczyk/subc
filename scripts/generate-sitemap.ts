const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

const SITE_URL = "https://salonunikatow.pl";

const pages = [
  "/", 
  "/about", 
  "/contact", 
  "/purchase", 
  "/privacyPolicy"
];

const stream = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream("./public/sitemap.xml");

stream.pipe(writeStream);

pages.forEach((page) => {
  stream.write({ url: page, changefreq: "weekly", priority: 0.8 });
});

stream.end();

console.log("✅ Sitemap generated: /public/sitemap.xml");
