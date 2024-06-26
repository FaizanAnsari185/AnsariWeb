import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-5 bg-black text-white px-4 py-40">
      <div className="flex flex-col justify-center items-center sm:flex-col sm:items-start gap-5">
        <div className="text-center px-0 pt-0 pb-3 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-rose-300 to-white">
          Ansari Agency
        </div>
        <div className="text-center text-2xl font-semibold">
          We are creative digital agency
        </div>
        <div className="font-light text-center sm:text-left">
          At our digital agency, we blend creativity and expertise to craft
          bespoke digital solutions tailored to your needs. With a passion for
          innovation, we&apos;re dedicated to delivering exceptional experiences that
          captivate audiences and drive results. From web design and development
          to digital marketing and branding, our talented team is committed to
          exceeding expectations and helping your business thrive in the digital
          landscape. Collaborate with us and let&apos;s bring your vision to life
          with creativity, precision, and ingenuity.
        </div>
        <div>
          <button className="bg-gradient-to-tl from-rose-600 to-black hover:from-black hover:to-black py-3 px-5 rounded-xl text-sm border-2 hover:text-rose-600 hover:border-2 border-rose-600 transition ease-in-out duration-300">
            Let Talk
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 sm:gap-5">
        <div className="relative">
          <div className="h-full w-full bg-gradient-to-t from-[#0000007a] via-[#000000a2] to-[#000000] absolute left-0 right-0 top-0 bottom-0"></div>
          <div>
            <Image
              className="h-72 w-80"
              src="/assets/robot lady.jpeg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="text-3xl font-bold">
          Possibility
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 from-40% via-white to-white">
            Minds
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
