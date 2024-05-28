import Image from 'next/image'
import React from 'react'

const BrandBar = () => {
  const brandBar = [
    {
      id: "brand1",
      brandImage: "/assets/amazonLogo.png",
    },
    {
      id: "brand2",
      brandImage: "/assets/facebook.svg",
    },
    {
      id: "brand3",
      brandImage: "/assets/google.png",
    },
    {
      id: "brand4",
      brandImage: "/assets/Linked.png",
    },
    {
      id: "brand5",
      brandImage: "/assets/microsoft.png",
    },
    {
      id: "brand6",
      brandImage: "/assets/netflix.png",
    },
    {
      id: "brand7",
      brandImage: "/assets/paypal.png",
    },
    {
      id: "brand8",
      brandImage: "/assets/samsung.png",
    },
    {
      id: "brand9",
      brandImage: "/assets/skype.png",
    },
    {
      id: "brand10",
      brandImage: "/assets/whatsapp.png",
    },
  ]
  return (
    <div className="flex items-center gap-10 py-10 px-10 bg-black">
      {brandBar.map((brand) => (
        <div key={brand.id} className="grayscale transition ease-in-out hover:scale-125 duration-300 cursor-pointer">
          <Image  src={brand.brandImage} alt="" width={100} height={100} />
        </div>
      ))}
      </div>
  )
}

export default BrandBar