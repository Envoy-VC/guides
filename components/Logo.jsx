import React from "react";
import { useRouter } from "next/router";

const logo = (text) => (
  <span>
    {text}
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

export const Logo = () => {
  const { asPath } = useRouter();
  const slug = asPath.substring(asPath.indexOf("_"));
  const path = slug
    .substring(1)
    .replaceAll("-", " ")
    .toUpperCase()
    .split("/")[0];
  if (path === "") {
    return logo("GUIDES");
  } else {
    return logo(path);
  }
};

export default Logo;
