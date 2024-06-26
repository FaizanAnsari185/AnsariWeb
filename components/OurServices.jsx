import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  const cardDetails = [
    {
      id: "card1",
      name: "Web Design",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ut nisi aspernatur alias",
      img: "/assets/logo2.svg",
    },
    {
      id: "card2",
      name: "Product Branding",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ut nisi aspernatur alias",
      img: "/assets/logo3.svg",
    },
    {
      id: "card3",
      name: "UI/UX Design",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ut nisi aspernatur alias",
      img: "/assets/logo4.svg",
    },
    {
      id: "card4",
      name: "Graphic Design",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ut nisi aspernatur alias",
      img: "/assets/logo5.svg",
    },
  ]
  return (
    <div id="services" className="bg-black text-white flex flex-col items-center gap-5 pt-20 p-4">
        <h1 className="text-5xl sm:text-6xl font-semibold">
          Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-600 to-white">
            Services
          </span>
        </h1>
        <h2 className="text-lg sm:text-2xl font-bold text-center">
          We specialize in strategic digital creativity
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {cardDetails.map((card) => (
          <div key={card.id} className="min-w-80 max-w-80 bg-[#272a18] cursor-pointer border-2 border-[#272a18] flex flex-col gap-5 p-5 rounded-2xl hover:bg-black hover:border-2 hover:border-rose-600 transition ease-in-out duration-300">
            <div className="h-16 w-16 bg-[#16180d] rounded-2xl transition ease-in-out hover:scale-125 duration-500">
              <div className="h-10 w-10 ml-3 mt-3 transition ease-in-out hover:scale-150 duration-500">
                <Image
                  className="h-full w-full"
                  src={card.img}
                  alt="ServiceCard" width={100} height={100}
                />
              </div>
            </div>
            <div>{card.name}</div>
            <div>{card.details}</div>
          </div>
          ))}
        </div>
      </div>
  )
}

export default OurServices