import { useRouter } from "next/router";

const logo = (
  <span>
    30 DAYS OF SOLIDITY
    <style jsx>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
        span {
          font-size: 24px;
          font-family: "Rubik", sans-serif;
          font-weight: 700;
          padding: 0.5rem 0.5rem 0.5rem 0;
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        span:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}
    </style>
  </span>
);

const config = {
  docsRepositoryBase: "https://github.com/Envoy-VC/30-Days-of-Solidity",
  logo,
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
    text: (
      <span>
        <a
          href="https://spdx.org/licenses/GPL-3.0-or-later.html"
          target="_blank"
          rel="license noopener noreferrer"
        >
          GNU GPLv3 @{new Date().getFullYear()}
        </a>
        <br />
        <a
          href="https://github.com/Envoy-VC/30-Days-of-Solidity"
          target="_blank noopener noreferrer"
        >
          30 Days of Solidity
        </a>
      </span>
    ),
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
    if (asPath !== "/") {
      return {
        titleTemplate: "%s",
      };
    } else {
      return {
        titleTemplate: "30 Days of Solidity",
      };
    }
  },
};

export default config;
