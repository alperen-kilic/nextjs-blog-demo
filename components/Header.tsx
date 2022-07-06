import Link from "next/link";
import React from "react";

import siteLogo from "../public/logo/nextblog.png";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src={siteLogo.src}
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="cursor-not-allowed select-none">About</h3>
          <h3 className="cursor-not-allowed select-none text-white bg-blue-600 px-4 py-1 rounded-full">
            Contact
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-blue-600">
        <h3 className="cursor-not-allowed select-none">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-blue-600 select-none cursor-not-allowed">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
