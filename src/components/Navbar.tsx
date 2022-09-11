import React from "react";
import LogoNav from "../images/logo_light.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="bg-transparent border-b border-gray-200 px-2 sm:px-4 py-7 rounded dark:bg-gray-900">
        <div className="absolute flex items-center left-1/2 transform -translate-x-1/2 translate-y-[5%]">
          <img
            src={LogoNav}
            className="h-auto  sm:h-auto"
            alt="Flowbite Logo"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
