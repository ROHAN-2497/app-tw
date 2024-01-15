import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border bottom-1 ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.svg" 
          alt="Evently logo"  width={128} height={38}/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
