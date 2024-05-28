import Image from 'next/image'
import React from 'react'

const ScrollUp = () => {
  return (
    <div className="fixed z-50 bottom-5 right-5 h-12 w-12 p-3 bg-purple-600 rounded-full border-2 hover:bg-black hover:text-purple-600 hover:border-2 border-purple-600 transition ease-in-out duration-300">
        <Image className="h-full w-full" src="/assets/UpLogo.svg" alt="" height={100} width={100} />    
      </div>
  )
}


export default ScrollUp