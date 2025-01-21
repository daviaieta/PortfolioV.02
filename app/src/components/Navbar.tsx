import Image from "next/image";
import React from "react";
import { assests } from "../assets/assets";

export const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
          <Image
            src={assests.logo}
            className="w-28 cursor-pointer mr-14"
          ></Image>
        </a>
      </nav>
    </>
  );
};
