import { Helmet } from "react-helmet";


export default function SEO({
  title,
  description,
  keywords,
  url,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
}) {
  const siteName = "Noufel seif el islam";
  const siteUrl = "https://rokaichabab.vercel.app";
  const defaultImage = `${siteUrl}/p.jpg`;
  const defaultKeywords = keywords || "Noufel seif el islam, Mern stack developer, Next js developer, Software Engineer, Portfolio, Projects";

  return (
    <Helmet>
      {/* Title */}
      <title>{title} | {siteName}</title>

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
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
      
      {/* Additional Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}