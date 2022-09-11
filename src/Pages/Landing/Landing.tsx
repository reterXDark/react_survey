import React from "react";
import Navbar from "../../components/Navbar";
import {
  CheckCircleIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

type Props = {};

const Details = [
  {
    img: "win",
    heading: "Register for a chance to win",
    description: "a 30-second advertisement on Startup.Radio",
  },
  {
    img: "paint",
    heading: "Less than 2 minutes",
    description: "to fill out the survey",
  },
  {
    img: "secure",
    heading: "Your data is secure",
    description: "Protected under German Privacy Law",
  },
];

const Landing = (props: Props) => {
  return (
    // container flex flex-col items-center justify-center mx-auto
    <div className="">
      <div className="mt-20 xl:mx-[30%] md:mx-[20%] sm:mx-[0%] ">
        <p className="text-4xl font-sans font-medium text-center">
          Welcome to Loans Direct. Capital
        </p>
        <p className="text-xl font-sans font-light text-center mt-5">
          We want to make your search for cooperation partners and investors as
          easy as ordering pizza. Register here to be ahead of the curve
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center mt-10 space-y-10">
        <button
          type="button"
          className="text-white justify-center xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[50%]  bg-[#f4af5f] hover:bg-[#f4af57]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <p className="mx-2 text-center text-base font-serif font-bold">
            Yes, ask me!
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-4 h-4  "
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className="text-white justify-center xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[50%]   bg-[#f4af5f] hover:bg-[#f4af57]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <p className="mx-2 text-center text-base font-serif font-bold">
            Take me straight to the sign-up
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-4 h-4  "
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center mt-10">
        <ul className="space-y-4">
          {Details.map((item, index) => {
            return (
              <>
                <li className="flex items-center">
                  {(() => {
                    if (item.img == "win")
                      return (
                        <SparklesIcon className="h-6 w-6 text-slate-800" />
                      );
                    if (item.img == "paint")
                      return (
                        <PaintBrushIcon className="h-6 w-6 text-slate-800" />
                      );
                    if (item.img == "secure") {
                      return (
                        <ShieldCheckIcon className="h-6 w-6 text-slate-800" />
                      );
                    }
                  })()}
                  {/* <CheckCircleIcon className="h-6 w-6 text-slate-800" /> */}
                  <div className="flex flex-col">
                    <p className="ml-4 font-serif font-semibold text-base text-black">
                      {item.heading}
                    </p>
                    <p className="ml-4 font-serif font-light text-sm text-[#505051]">
                      {item.description}
                    </p>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center mt-20">
        <p className="italic font-serif text-center text-base font-semibold">
          With our experience from Loans Direct. Capital we have helped many
          startups to approach find, or pitch investors.{" "}
        </p>
      </div>
    </div>
  );
};

export default Landing;
