'use client';
import { Anchor } from "lucide-react";
import { useNavbarStore } from "@/store/navbar";

export default function Home() {
  const navbarHeight = useNavbarStore((state) => state.navbarHeight);
  console.log("Navbar Height in Home:", navbarHeight);
  return (
    <section id="home" className={`relative overflow-y-hidden h-dvh flex items-center justify-center bg-gray-100`} style={{paddingTop : `${navbarHeight}px`}}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/1210.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute z-12 w-full h-39.5 bg-linear-to-t from-white to-transparent bottom-0 "/>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="w-full h-full z-13 container-layout flex flex-col justify-center">
        <div className="flex flex-col gap-6 lg:px-13.5">
          <div className="flex items-center gap-3">
            <Anchor className="sm:size-10 size-7 text-white" />
            <h2 className="text-white text-xs sm:text-base">PT. Sealand Crewing International</h2>
          </div>
          <h1 className="text-white 2xl:text-text-primary xl:text-6xl lg:text-5xl sm:text-4xl text-xl font-bold leading-[1.4]">Your Trusted Partner in Maritime Crew Management</h1>
          <p className="2xl:w-209 lg:w-180 2xl:text-xl sm:text-sm text-xs text-white">Professional provider of qualified seafarers for MPP, Bulk Carrier, and Tanker vessels. Delivering excellence with speed, flexibility, and 24/7 support.</p>
          <button className="2xl:px-8 2xl:py-4 px-6 text-sm sm:text-base py-2 mt-6.5 w-fit bg-secondary rounded-2xl text-white">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
