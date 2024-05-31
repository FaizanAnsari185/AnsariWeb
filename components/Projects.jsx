"use client";
import Image from "next/image";
import React, { useState } from "react";
const cardDetails = [
  {
    id: "card1",
    name: "Food App",
    photo: "/assets/NevImg1.jpg",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "app",
  },
  {
    id: "card2",
    name: "Mobile Ecommerce WebSite",
    photo: "/assets/NevImg2.png",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "web",
  },
  {
    id: "card3",
    name: "Ride Sharing App",
    photo: "/assets/NevImg3.png",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "app",
  },
  {
    id: "card4",
    name: "WhatsApp Clone",
    photo: "/assets/NevImg4.png",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "uxui",
  },
  {
    id: "card5",
    name: "Task Management",
    photo: "/assets/NevImg5.png",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "web",
  },
  {
    id: "card6",
    name: "Music and Video Streaming App",
    photo: "/assets/NevImg6.png",
    detail:
      "adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, vitae cupiditate totam quia",
    platform: "app",
  },
];

const Projects = () => {
  const [projectArr, setProjectArr] = useState(cardDetails);
  const [platform, setPlatform] = useState("all");
  function handlClick(p) {
    setPlatform(p)
    if (p === "all") {
      setProjectArr(cardDetails);
    } else {
      setProjectArr(cardDetails.filter((card) => card.platform === p));
    }
  }

  return (
    <div id="project" className="bg-[#272a18] text-white py-20">
      <div className="flex flex-col items-center gap-7">
        <div className="text-6xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 from-40% via-rose-300 via-80% to-white">
            Project
          </span>
          Built
        </div>
        <div className="font-bold text-base sm:text-xl">
          By our team of engineers
        </div>
        <div className="flex gap-12">
          <div
            className={`hover:text-rose-600 cursor-pointer transition ease-in-out delay-100 duration-500 ${
              platform === "all" && "text-rose-600"
            }`}
            onClick={() => handlClick("all")}
          >
            All
          </div>
          <div
            className={`hover:text-rose-600 cursor-pointer transition ease-in-out delay-100 duration-500 ${
              platform === "web" && "text-rose-600"
            }`}
            onClick={() => handlClick("web")}
          >
            Web
          </div>
          <div
            className={`hover:text-rose-600 cursor-pointer transition ease-in-out delay-100 duration-500 ${
              platform === "app" && "text-rose-600"
            }`}
            onClick={() => handlClick("app")}
          >
            Apps
          </div>
          <div
            className={`hover:text-rose-600 cursor-pointer transition ease-in-out delay-100 duration-500 ${
              platform === "uxui" && "text-rose-600"
            }`}
            onClick={() => handlClick("uxui")}
          >
            UI/UX
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 px-4">
        <div className="flex flex-wrap gap-10 justify-center">
          {projectArr.map((card) => (
            <div
              key={card.id}
              className="min-w-80 max-w-80 bg-[#222222] rounded-3xl flex flex-col gap-7 border border-rose-700 hover:border-[#3e4226] p-5 transition ease-in-out delay-150 duration-500"
            >
              <div className="h-60">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src={card.photo}
                  alt="ProjectDetail"
                  width={100}
                  height={100}
                />
              </div>
              <div>{card.name}</div>
              <div className="text-sm fobt-light">{card.detail}</div>
              <div>
                <button className="bg-gradient-to-tl from-rose-600 to-black hover:from-[#222222] hover:to-[#222222] py-3 px-5 rounded-xl text-sm border-2 hover:text-rose-600 hover:border-2 border-rose-600 transition ease-in-out duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
