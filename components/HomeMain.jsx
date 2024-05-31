import Image from 'next/image'
import React from 'react'

const HomeMain = () => {
  return (
    <div id="home" className="relative">
        <div className="h-full w-full bg-[#000000] absolute left-0 right-0 top-0 bottom-0 opacity-45"></div>
        <div>
          <div className="flex flex-col justify-center items-center text-center gap-5 pt-10 sm:pt-52 pb-0 bg-gradient-to-b from-[#000000] to-[#00000048] text-white relative z-10">
            <div className='text-2xl font-bold sm:text-base sm:font-normal'>Creative Agency</div>
            <div className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-300 to-white p-5">
              Digital Agency
            </div>
            <div className="text-4xl sm:text-6xl font-bold">Featuring Robust Design</div>
            <div className="font-light text-center p-10 bg-[#1a1a1a] rounded-3xl mx-4 sm:mx-52">
              <div className="h-8 w-8">
                <Image
                  className="h-full w-full"
                  src="/assets/coma.svg" width={100} height={100}
                  alt=""
                />
              </div>
              Welcome to our digital agency, where powerful design meets
              innovative strategy. Our team excels in crafting compelling,
              functional digital experiences that captivate and convert.
              Specializing in web design, UX/UI, and interactive media, we
              ensure your project is not just visually stunning but also
              strategically effective. Explore how our robust designs can
              transform your online presence and drive success. Let’s create
              something impactful together.
              <div className="flex justify-end">
                <div className="h-8 w-8">
                  <Image
                    className="h-full w-full"
                    src="/assets/comaUlta.svg" width={100} height={100}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-7">
              <button className="bg-gradient-to-tl from-rose-600 to-black hover:from-black hover:to-black py-3 px-5 rounded-xl text-sm border-2 hover:text-rose-600 hover:border-2 border-rose-600 transition ease-in-out duration-300">
                Contact Us
              </button>
              <button className="bg-gray-800 py-3.5 px-5 rounded-xl text-sm hover:bg-gray-800 hover:text-rose-600 border-rose-600 transition ease-in-out duration-300">
                Our Services
              </button>
            </div>
            <div className="flex justify-center gap-10 p-10 w-full mt-10 backdrop-blur-3xl text-white">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-3xl sm:text-6xl font-bold">9+</h1>
                <p className="text-xs sm:font-light">Years of Experiences</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-3xl sm:text-6xl font-bold">4.5K+</h1>
                <p className="text-xs sm:font-light">Project Completed</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-3xl sm:text-6xl font-bold">10.5K+</h1>
                <p className="text-xs sm:font-light">Trusted Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeMain