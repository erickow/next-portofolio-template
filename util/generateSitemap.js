
const fs = require('fs')
const globby = require('globby')
const CONSTANT_DATA = require('../content/constant')


async function generateSiteMap() {
  const getDate = new Date().toISOString();
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[slug].js',
    '!pages/api',
  ])

  const website = CONSTANT_DATA.website_url

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
          ${pages
      .map(page => {
        const path = page
          .replace('pages', '')
          .replace('.js', '')
          .replace('.md', '')
        const route = path.includes('/index') ? path.replace('/index', '') : path
        return `
  <url>
    <loc>${`${website}${route}`}</loc>
    <lastmod>${getDate}</lastmod>
  </url>
        `
      })
      .join('')}
  </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()