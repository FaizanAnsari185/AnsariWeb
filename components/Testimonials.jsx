import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  const cardDetails = [
    {
      id: "card1",
      image: "/assets/Client1.jpeg",
      name: "Steave Rogers",
      clientDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    },
    {
      id: "card2",
      image: "/assets/Client2.jpeg",
      name: "Nikki Stark",
      clientDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center text-white bg-black py-10 px-4">
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 from-40% via-rose-500 to-white">
          Testimonials
        </div>
        <div className="text-2xl font-semibold mt-5">
          What Our <span className="text-rose-600">Clients</span> Says
        </div>
        <div className="flex gap-10 p-20 pb-0">
          {cardDetails.map((card) => (
          <div key={card.id} className="bg-[#181818] text-white flex flex-col gap-7 items-center rounded-3xl p-16 w-1/2 border border-[#181818] hover:border-rose-600 transition ease-in-out delay-0 hover:scale-95 duration-500">
            <div className="h-12 w-12">
              <Image
                className="h-full w-full rounded-full object-cover object-center"
                src={card.image}
                alt="" width={100} height={100}
              />
            </div>
            <div className='font-bold'>{card.name}</div>
            <div className="text-center font-light text-sm">
              {card.clientDetail}
            </div>
          </div>
          ))}
        </div>
      </div>
  )
}

export default Testimonials