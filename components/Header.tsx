import Link from "next/link";
import React from "react";
import siteLogo from "../public/logo/logo-no-background.png";
function Header() {
  return (
    <header className="flex p-5 max-w-7xl mx-auto justify-center">
      <div className="flex items-center justify-center space-x-5">
        <Link href="/">
          <img
            className="w-32 object-contain cursor-pointer"
            src={siteLogo.src}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
