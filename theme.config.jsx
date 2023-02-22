import { useRouter } from "next/router";

const config = {
  logo: <span>30 Days of Solidity</span>,
  docsRepositoryBase: "https://github.com/Envoy-VC/30-Days-of-Solidity",
  project: {
    link: "https://github.com/Envoy-VC/30-Days-of-Solidity",
  },
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
