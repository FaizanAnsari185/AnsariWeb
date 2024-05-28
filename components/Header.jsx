
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center sticky z-50 top-0 bg-black text-white py-4 px-3">
      <div className="flex">
        <div className="h-8 w-8">
          <Image
            className="h-full w-full"
            src="/assets/logo.svg"
            alt=""
            srcset="" width={100} height={100}
          />
        </div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white from-50% via-purple-600 via-60% to-white">
          Ansari
        </h1>
      </div>
      <div className="flex gap-20 font-semibold">
        <Link href={"#home"} className="hover:text-purple-500 cursor-pointer transition ease-in-out delay-100 duration-300">
          Home
        </Link>
        <Link href={"#services"} scroll={true} className="hover:text-purple-500 cursor-pointer transition ease-in-out delay-100 duration-300">
          Our Services
        </Link>
        <Link href={"#about"} className="hover:text-purple-500 cursor-pointer transition ease-in-out delay-100 duration-300">
          About Us
        </Link>
        <Link href={"#project"} className="hover:text-purple-500 cursor-pointer transition ease-in-out delay-100 duration-300">
          Projects
        </Link>
        <Link href={"#team"} className="hover:text-purple-500 cursor-pointer transition ease-in-out delay-100 duration-300">
          Teams
        </Link>
      </div>
      <button className="bg-gradient-to-tl from-purple-600 to-black hover:from-black hover:to-black py-3 px-5 rounded-xl text-sm border-2 border-purple-600 hover:text-purple-500 hover:border-2  transition ease-in-out duration-300">
        Contact Us
      </button>
    </div>
  );
};

export default Header;
