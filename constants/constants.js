export const taglines = {
  soliditySeries:
    "Buckle Up and Get Ready for a Solidity Adventure Like No Other",
};

const domain = "https://guides.vedantc.dev";

export const days = [
  {
    title: "Layout of a Solidity File",
    icon: "1️⃣ ",
    url: "/30-days-of-solidity/start/layout-of-solidity-file",
    seo: {
      title: "Layout of a Solidity File",
      description: "Learn how to write a Solidity file.",
    },
  },
  {
    title: "Variables and Datatypes",
    icon: "2️⃣ ",
    url: "/30-days-of-solidity/start/variables-and-datatypes",
  },
  {
    title: "Scopes and Operators",
    icon: "3️⃣ ",
    url: "/30-days-of-solidity/start/scopes-and-operators",
  },
  {
    title: "Functions",
    icon: "4️⃣ ",
    url: "/30-days-of-solidity/start/functions",
  },
  {
    title: "Control Structures",
    icon: "5️⃣ ",
    url: "/30-days-of-solidity/start/control-structures",
  },
];

export const SEO = {
  home: {
    title: "Guides",
    description: "Learn how to build a decentralized application.",
    image: `${domain}/api/og`,
  },
  "30-days-of-solidity": {
    title: "30 Days of Solidity",
    description: "Master Solidity and Smart Contract Development",
    image: function () {
      return `${domain}/api/og?tutorial=30 DAYS OF SOLIDITY&tagline=${taglines.soliditySeries}`;
    },
    index: {
      title: "Introduction",
      description: "Introduction to the 30 Days of Solidity Series",
      image: function () {
        return `${domain}/api/og?title=${this.title}&tutorial=30 DAYS OF SOLIDITY&tagline=${taglines.soliditySeries}`;
      },
    },
    "what-is-solidity": {
      title: "What is Solidity?",
      description: "Learn what Solidity is and why it is important.",
      image: function () {
        return `${domain}/api/og?title=${this.title}&tutorial=30 DAYS OF SOLIDITY&tagline=${taglines.soliditySeries}`;
      },
    },
    "setting-up": {
      title: "Setting Up your Development Environment",
      description: "Learn how to set up your development environment.",
      image: function () {
        return `${domain}/api/og?title=${this.title}&tutorial=30 DAYS OF SOLIDITY&tagline=${taglines.soliditySeries}`;
      },
    },
    start: {
      title: "Navigation",
      description: "Navigation for 30 Days of Solidity",
      image: function () {
        return `${domain}/api/og?title=${this.title}&tutorial=30 DAYS OF SOLIDITY&tagline=${taglines.soliditySeries}`;
      },
    },
  },
};
