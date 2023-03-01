import Image from "next/image";

import twitter from "../public/twitter.svg";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import mail from "../public/mail.svg";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1440px]">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Guides"
            className="inline-flex items-center"
          >
            <Image src={logo} alt="Guides" width={48} height={48} />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 uppercase">
              Guides
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-gray-400">
              With easy-to-follow tutorials and guides, users can quickly become
              proficient in the world of Web3 and Blockchain.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800 dark:text-gray-200">
              Recent Tutorials
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/30-days-of-solidity"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  30 Days of Solidity
                </a>
              </li>
              <li>
                <a
                  href="/polygon-deep-dive"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Polygon Deep Dive
                </a>
              </li>
            </ul>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide dark:text-gray-200 text-gray-800">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 dark:bg-[#171717] bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md dark:bg-[#BA60FC] bg-[#A38CFD] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
              Stay in the loop with the latest Web3 and blockchain updates by
              subscribing to our newsletter today!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-5 border-t sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © Copyright 2023 Vedant Chainani. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://twitter.com/Envoy_1084"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <Image src={twitter} alt="Twitter" width={30} height={30} />
          </a>
          <a
            href="https://github.com/Envoy-VC"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <Image src={github} alt="GitHub" width={44} height={44} />
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-chainani/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <Image src={linkedin} alt="Linkedin" width={30} height={30} />
          </a>
          <a
            href="mailto:vedantchainani1084@gmail.com"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <Image src={mail} alt="Mail" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
