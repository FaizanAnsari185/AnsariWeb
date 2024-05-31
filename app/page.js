import AboutUs from "@/components/AboutUs";
import BrandBar from "@/components/BrandBar";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/components/HomeMain";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import Projects from "@/components/Projects";
import ScrollUp from "@/components/ScrollUp";
import Testimonials from "@/components/Testimonials";
import ThreeDots from "@/components/ThreeDots";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <ScrollUp/>
     <Header/>
      <HomeMain/>
      <BrandBar/>
      <OurServices/>
      <AboutUs/>
      <Projects/>
      <OurTeam/>
      <Testimonials/>
      <ThreeDots/>
      <div className="bg-black text-white flex flex-col justify-center items-center sm:flex-row sm:items-start gap-8 py-28 px-4">
        <ContactForm/>
        <ContactCard/>
      </div>
      
      <Footer/>
    </main>
  );
}
