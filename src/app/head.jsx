const title = "Valère Douillé | Portfolio";
const url = "https://valeredouille.com";
const description =
  "Welcome to my portfolio. Here you can find informations about me and my work. Let's start a project together!";
const author = "Valère Douillé";

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Développeur Web, Software Engineer, React, 3D, Framer motion, Web Developer, Front end, NextJS "
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="site" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={"/icons-vd/apple-touch-icon.png"} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      <link rel="apple-touch-icon" href="/icons-vd/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="16x16"
        href="/icons-vd/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="/icons-vd/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons-vd/apple-touch-icon.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        color="#000000"
        href="/icons-vd/apple-touch-icon.png"
      />
      <link
        rel="apple-touch-startup-image"
        href="/icons-vd/apple-touch-icon.png"
      />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/icons-vd/apple-touch-icon.png" />
    </>
  );
}
