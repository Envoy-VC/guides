import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Logo, Footer } from "./components";
import { SEO } from "./constants/constants";

const config = {
  docsRepositoryBase: "https://github.com/Envoy-VC/30-Days-of-Solidity",
  logo: <Logo />,
  logoLink: true,
  project: {
    link: "https://github.com/Envoy-VC/30-Days-of-Solidity",
  },
  search: {
    placeholder: "Search",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    toggleButton: true,
  },
  footer: {
    text: <Footer />,
  },
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Guides",
      };
    } else if (asPath === "/30-days-of-solidity") {
      return {
        titleTemplate: "30 Days of Solidity",
      };
    } else {
      return {
        titleTemplate: "%s",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const slugs = route.split("/");

    const generateSEO = () => {
      if (route == "/") {
        const seo = SEO.home;
        return seo;
      } else if (slugs.length >= 2) {
        const seo = SEO[slugs[1]];
        return seo;
      }
    };

    const seo = generateSEO();

    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="description" content={seo.description} />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Envoy_1084" />
        <meta name="twitter:site:domain" content="https://guides.vedantc.dev" />
        <meta name="twitter:title" content={route === "/" ? "Guides" : title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:creator" content="@Envoy_1084" />
        <meta name="twitter:image" content={seo.image} />

        {/* Open Graph data */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={route === "/" ? "Guides" : title} />
        <meta property="og:url" content="https://guides.vedantc.dev" />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={seo.description} />
      </>
    );
  },
};

export default config;
