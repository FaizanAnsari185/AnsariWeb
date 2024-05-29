import Image from "next/image";
import React from "react";

const ContactCard = () => {
  const cardDetails = [
    {
      id: "S1",
      sm: "Email",
      smAddress: "mrAnsari@gmail.com",
      image: "/assets/EmailLogo.svg",
    },
    {
      id: "S2",
      sm: "WhatsApp",
      smAddress: "Faizan Ansari",
      image: "/assets/WhatsappLogo.svg",
    },
    {
      id: "S3",
      sm: "Messenger",
      smAddress: "+91-7734749634",
      image: "/assets/MesengerLogo.svg",
    },
  ];
  return (
    <div className="flex flex-col gap-8 w-1/2">
      {cardDetails.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-tl from-[#16180d] to-black hover:bg-gradient-to-br from-[#16180d] to-black rounded-3xl flex flex-col border border-[#181818] hover:border-rose-600 transition ease-in-out hover:scale-95 duration-300"
        >
          <div>
          <div className="h-16 w-16 ml-5 mt-5 bg-[#16180d] hover:bg-[#0e0f0b] flex justify-center items-center rounded-full transition ease-in-out hover:scale-125 duration-500">
              <div className="h-8 w-8 transition ease-in-out hover:scale-150 duration-500">
                <Image
                  className="h-full w-full"
                  src={card.image}
                  alt="social media"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="font-bold">{card.sm}</div>
              <div className="font-light text-sm">{card.smAddress}</div>
            </div>
            <div className="flex justify-center my-5">
              <button className="bg-gradient-to-tl from-rose-600 to-black hover:from-black hover:to-black py-3 px-5 rounded-xl text-sm border-2 hover:text-rose-600 hover:border-2 border-rose-600 transition ease-in-out duration-300">
                Let Talk
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
