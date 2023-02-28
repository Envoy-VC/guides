/* eslint-disable import/no-anonymous-default-export */
/* eslint-env node */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const interFont = fetch(new URL("./Inter-SemiBold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

const rubikFont = fetch(new URL("./Rubik-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function (req) {
  const inter = await interFont;
  const rubik = await rubikFont;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTutorial = searchParams.has("tutorial");
  const hasTitle = searchParams.has("title");
  const hasTagline = searchParams.has("tagline");

  const tutorial = hasTitle
    ? searchParams.get("tutorial")?.slice(0, 100)
    : "Guides";
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Get Started in Web3 and Blockchain";
  const tagline = hasTagline ? searchParams.get("tagline")?.slice(0, 100) : "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          overflow: "hidden",
          content: "",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/alien-planet-landscape-with-exploding-satellite_107791-13645.jpg?w=1200&h=630)",
          backgroundSize: "1200px 630px",
          position: "absolute",
          zIndex: -1,
          filter: "blur(50px)",
          fontWeight: 600,
          color: "white",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "20%",
            left: "7.5%",
            fontSize: 64,
            fontFamily: "Rubik",
            fontWeight: "800",
            letterSpacing: "0.01rem",
            padding: "0.5rem 0.5rem 0.5rem 0",
            background: "rgb(0,0,0)",
            backgroundImage: "linear-gradient(to right, #30cfd0, #c43ad6)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent;",
            color: "transparent",
          }}
        >
          {tutorial}
        </span>
        <p
          style={{
            position: "absolute",
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1,
            background: "rgb(255,255,255)",
            backgroundImage:
              "linear-gradient(207deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          {tagline}
        </p>
        <h1
          style={{
            fontSize: 82,
            margin: "0 0 40px -2px",
            lineHeight: 1.1,
            letterSpacing: -4,
            background: "rgb(255,255,255)",
            backgroundImage:
              "linear-gradient(207deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "inter",
          data: inter,
          style: "normal",
        },
        {
          name: "Rubik",
          data: rubik,
          style: "normal",
        },
      ],
    }
  );
}
