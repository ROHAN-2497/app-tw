import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center gap-4 flex-between flex-col p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All Rights resorved.. </p>
      </div>
    </footer>
  );
};

export default Footer;
