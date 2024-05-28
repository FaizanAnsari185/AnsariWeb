import Image from 'next/image'
import React from 'react'

const Projects = () => {
  const cardDetails = [
    {
    id: "card1",
    name: "Food App",
    photo: "/assets/NevImg1.jpg",
    detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
    {
    id: "card2",
    name: "Mobile Ecommerce WebSite",
    photo: "/assets/NevImg2.png",
    detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
    {
      id: "card3",
      name: "Ride Sharing App",
      photo: "/assets/NevImg3.png",
      detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
  ];
  const cardDetails2 = [
    {
      id: "card1",
      name: "WhatsApp Clone",
      photo: "/assets/NevImg4.png",
      detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
    {
      id: "card2",
      name: "Task Management",
      photo: "/assets/NevImg5.png",
      detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
    {
      id: "card3",
      name: "Music and Video Streaming App",
      photo: "/assets/NevImg6.png",
      detail: "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    },
  ];
  return (
    <div className="bg-[#272a18] text-white py-20" id='project'>
        <div className="flex flex-col items-center gap-7">
          <div className="text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-40% via-purple-300 via-80% to-white">
              Project
            </span>
            Built
          </div>
          <div className="text-2xl">By our team of engineers</div>
          <div className="flex gap-12">
            <div className="hover:text-purple-600 cursor-pointer transition ease-in-out delay-100 duration-500">
              All
            </div>
            <div className="hover:text-purple-600 cursor-pointer transition ease-in-out delay-100 duration-500">
              Web
            </div>
            <div className="hover:text-purple-600 cursor-pointer transition ease-in-out delay-100 duration-500">
              Apps
            </div>
            <div className="hover:text-purple-600 cursor-pointer transition ease-in-out delay-100 duration-500">
              UI/UX
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-10 px-32">
          <div className="flex gap-10">
            {cardDetails.map((card) => (
            <div key={card.id} className="bg-[#222222] rounded-3xl flex flex-col gap-7 border border-purple-700 hover:border-[#3e4226] p-5 w-80 transition ease-in-out delay-150 duration-500">
              <div className="h-60">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src={card.photo}
                  alt="ProjectDetail" width={100} height={100}
                />
              </div>
              <div>{card.name}</div>
              <div className="text-sm fobt-light">
                {card.detail}
              </div>
              <div>
                <button className="bg-gradient-to-tl from-purple-600 to-black hover:from-[#222222] hover:to-[#222222] py-3 px-5 rounded-xl text-sm border-2 hover:text-purple-600 hover:border-2 border-purple-600 transition ease-in-out duration-300">
                  View
                </button>
              </div>
            </div>
            ))}
          </div>
          <div className="flex gap-10">
            {cardDetails2.map((card) => (
              <div key={card.id} className="bg-[#222222] rounded-3xl flex flex-col gap-7 border border-purple-700 hover:border-[#3e4226] p-5 w-80 transition ease-in-out delay-150 duration-500">
              <div className="h-60">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src={card.photo}
                  alt="ProjectDetail" width={100} height={100}
                />
              </div>
              <div>{card.name}</div>
              <div className="text-sm fobt-light">
                {card.detail}
              </div>
              <div>
                <button className="bg-gradient-to-tl from-purple-600 to-black hover:from-[#222222] hover:to-[#222222] py-3 px-5 rounded-xl text-sm border-2 hover:text-purple-600 hover:border-2 border-purple-600 transition ease-in-out duration-300">
                  View
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Projects