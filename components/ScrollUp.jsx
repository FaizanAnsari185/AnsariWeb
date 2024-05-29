import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ScrollUp = () => {
  return (
    <Link href={"#home"} className="fixed z-50 bottom-5 right-5 h-12 w-12 p-3 bg-gradient-to-tl from-rose-600 to-black hover:from-black hover:to-black rounded-full border-2 hover:text-rose-600 hover:border-2 border-rose-600 transition ease-in-out duration-300">
        <Image className="h-full w-full" src="/assets/UpLogo.svg" alt="" height={100} width={100} />    
      </Link>
  )
}


export default ScrollUp