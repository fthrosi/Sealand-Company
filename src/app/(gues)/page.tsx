import Home from "@/components/home/home";
import About from "@/components/about us/about";
import VisionAndMision from "@/components/vision&mision/vision";
import Recruitment from "@/components/recruitmen/recruitment";
import Certificate from "@/components/certificate/certificate";
import Portfolio from "@/components/portfolio/portfolio";
import Careers from "@/components/careers/careers";
import ContactUs from "@/components/contactUs/contactUs";
import Vessels from "@/components/vessels/vessels";
import { Gallery } from "@/components/galery/galery";
import { TeamSection } from "@/components/teams/teams";
import RecruitmentSection from "@/components/recruitmen/recruitment";

export default function GuestPage() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <VisionAndMision />
      <Vessels />
      <Portfolio />
      <Certificate />
      {/* <Recruitment /> */}
      <RecruitmentSection />
      <Careers/>
      <TeamSection />
      <Gallery/>
      <ContactUs/>
    </div>
  );
}