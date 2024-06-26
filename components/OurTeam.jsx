import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const cardDeatils = [
    {
      id: "card1",
      Employee: "Emmanuel Eze",
      EmployeeProfession: "Fullstack Developer",
      EmployeeImage: "/assets/HumanImg1.jpeg",
      facebook: "/assets/facebookLogo.svg",
      linkdian: "/assets/LinkdianLogo.svg",
      youtube: "/assets/YoutubeLogo.svg",
      instagram: "/assets/InstagramLogo.svg",
    },
    {
      id: "card2",
      Employee: "Oluoma Jame",
      EmployeeProfession: "UI/UX",
      EmployeeImage: "/assets/HumanImg2.jpeg",
      facebook: "/assets/facebookLogo.svg",
      linkdian: "/assets/LinkdianLogo.svg",
      youtube: "/assets/YoutubeLogo.svg",
      instagram: "/assets/InstagramLogo.svg",
    },
    {
      id: "card3",
      Employee: "Lawrence Onu",
      EmployeeProfession: "Frontend Developer",
      EmployeeImage: "/assets/HumanImg3.jpeg",
      facebook: "/assets/facebookLogo.svg",
      linkdian: "/assets/LinkdianLogo.svg",
      youtube: "/assets/YoutubeLogo.svg",
      instagram: "/assets/InstagramLogo.svg",
    },
    {
      id: "card4",
      Employee: "Mary Brown",
      EmployeeProfession: "Content Writer",
      EmployeeImage: "/assets/HumanImg4.jpeg",
      facebook: "/assets/facebookLogo.svg",
      linkdian: "/assets/LinkdianLogo.svg",
      youtube: "/assets/YoutubeLogo.svg",
      instagram: "/assets/InstagramLogo.svg",
    },
  ];
  return (
    <div id="team" className="flex flex-col items-center  gap-10 text-white bg-gradient-radial from-gray-950 to-black py-20">
      <div className="text-6xl font-bold">
        Our
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 from-40% via-white to-white">
          Teams
        </span>
      </div>
      <div className="px-5 sm:px-0 text-sm text-center font-medium">
        Meet our diverse team of creative minds, developers, and strategists –
        the driving force behind every project&apos;s success.
      </div>
      <div className="flex flex-wrap justify-center items-center gap-16">
        {cardDeatils.map((card) => (
          <div key={card.id} className="min-w-48 max-w-48 bg-[#272a18] rounded-3xl flex flex-col items-center pb-7">
            <div className="h-40 w-48 overflow-hidden rounded-3xl">
              <Image
                className="h-full w-full rounded-3xl object-cover object-top transition ease-in-out hover:scale-125 duration-500"
                src={card.EmployeeImage}
                alt="EmployeeDetails" width={100} height={100}
              />
            </div>
            <div className="my-4">{card.Employee}</div>
            <div className="mb-10 text-sm font-light">
              {card.EmployeeProfession}
            </div>
            <div className="flex gap-7">
              <div className="h-4 w-4 transition ease-in-out hover:scale-150 duration-300 cursor-pointer">
                <Image
                  className="h-full w-full"
                  src={card.facebook}
                  alt="" width={100} height={100}
                />
              </div>
              <div className="h-4 w-4 transition ease-in-out hover:scale-150 duration-300 cursor-pointer">
                <Image
                  className="h-full w-full"
                  src={card.linkdian}
                  alt="" width={100} height={100}
                />
              </div>
              <div className="h-4 w-4 transition ease-in-out hover:scale-150 duration-300 cursor-pointer">
                <Image
                  className="h-full w-full"
                  src={card.youtube}
                  alt="" width={100} height={100}
                />
              </div>
              <div className="h-4 w-4 transition ease-in-out hover:scale-150 duration-300 cursor-pointer">
                <Image
                  className="h-full w-full"
                  src={card.instagram}
                  alt="" width={100} height={100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
