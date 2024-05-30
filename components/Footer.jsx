import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FiverrLogo from './SVGs/FiverrLogo'

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-black text-white pt-32 pb-5">
        <div className="flex gap-10 justify-center">
        <div className="h-6 w-6 transition ease-in-out hover:scale-125 duration-500 cursor-pointer">
            <Image
              className="h-full w-full"
              src="/assets/fiverrLogo.svg"
              alt="" width={100} height={100}
            />
          </div>
          <div className="h-6 w-6 transition ease-in-out hover:scale-125 duration-500 cursor-pointer">
            <Image
              className="h-full w-full"
              src="/assets/GithubLogo.svg"
              alt="" width={100} height={100}
            />
          </div>
          <div className="h-6 w-6 transition ease-in-out hover:scale-125 duration-500 cursor-pointer">
            <Image
              className="h-full w-full"
              src="/assets/LinkdianLogo.svg"
              alt="" width={100} height={100}
            />
          </div>
          <div className="h-6 w-6 transition ease-in-out hover:scale-125 duration-500 cursor-pointer">
            <Image
              className="h-full w-full"
              src="/assets/YoutubeLogo.svg"
              alt="" width={100} height={100}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <Link href={"#home"} className="transition ease-in-out hover:text-rose-600 duration-300 cursor-pointer">
            Home
          </Link>
          <Link href={"#service"} className="transition ease-in-out hover:text-rose-600 duration-300 cursor-pointer">
            Our Services
          </Link>
          <Link href={"#about"} className="transition ease-in-out hover:text-rose-600 duration-300 cursor-pointer">
            About Us
          </Link>
          <Link href={"#project"} className="transition ease-in-out hover:text-rose-600 duration-300 cursor-pointer">
            Projects
          </Link>
          <Link href={"#team"} className="transition ease-in-out hover:text-rose-600 duration-300 cursor-pointer">
            Teams
          </Link>
        </div>
        <div className="flex justify-center text-xl font-thin">
          <i>Teacher Colony Ward No. 18 Nainwa 323801 Dist.Bundi Rajasthan</i>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="text-rose-600">
              Copyright © All right reserved - | 2024
            </div>
            <div className="font-extralight">
              Built with love by Mohammad Faizan Ansari A.K.A Mr Faizu.
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer