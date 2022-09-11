import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-4 border-t mt-24 flex items-center justify-center md:p-6 dark:bg-gray-800">
      <span className="bg-violet-200 text-gray-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Loans Direct. Capital™
          </a>
          . All Rights Reserved.
        </span>
      </span>
    </footer>
  );
};

export default Footer;
