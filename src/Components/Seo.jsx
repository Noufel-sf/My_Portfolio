import { Helmet } from "react-helmet";

const SITE_NAME = "Nasri Noufel Portfolio";
const SITE_URL = "https://noufel-sf.github.io/My_Portfolio";
const DEFAULT_IMAGE = `${SITE_URL}/p.jpg`;
const DEFAULT_DESCRIPTION =
  "Portfolio of Nasri Noufel Seif El Islam, Full Stack Developer building performant web apps with React, Next.js, Node.js, and clean architecture.";

function toAbsoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}


export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  url = "/",
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const absoluteUrl = toAbsoluteUrl(url);
  const defaultKeywords =
    keywords ||
    "Nasri Noufel, Full Stack Developer, MERN Stack Developer, React Developer, Next.js Developer, Portfolio, Projects";

  return (
    <Helmet>
      {/* Title */}
      <title>{pageTitle}</title>

      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={defaultKeywords} />
      {author && <meta name="author" content={author} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Viewport - already in index.html but good for consistency */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e293b" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nasri Noufel portfolio preview image" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absoluteUrl} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="Nasri Noufel portfolio preview image" />

      <link rel="canonical" href={absoluteUrl} />

      
      {/* Additional Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}