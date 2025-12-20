import Image from "next/image";
import { aboutUsData } from "@/const/aboutUs";

export default function About() {
  return (
    <section id="about" className="lg:h-dvh container-layout py-24 flex flex-col md:flex-row items-center justify-center 2xl:gap-16 lg:gap-14 xl:gap-15 md:gap-12">
      <div className="w-1/2 flex items-center">
        <Image
          src="/images/nahkoda.jpg"
          alt="Nahkoda"
          width={560}
          height={600}
          className="rounded-3xl object-cover 2xl:w-140 2xl:h-150 md:w-full md:h-110 lg:h-130 xl:h-140 hidden md:block"
        ></Image>
      </div>
      <div className="md:w-1/2 flex flex-col lg:gap-6 gap-4">
        <div className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full">
          <h2 className="text-secondary xl:text-sm lg:text-xs text-[0.625rem]">About Our Company</h2>
        </div>
        <h1 className="text-[#1434A3] xl:leading-15 xl:text-5xl lg:text-3xl lg:leading-11 text-2xl font-bold">
          <span className="text-[#DF1620]">PT. Sea</span>land Crewing
          International
        </h1>
        <div className="flex flex-col text-xs lg:text-sm xl:text-base xl:gap-8 gap-4 lg:gap-6 text-muted">
          <p>
            PT. SEALAND CREWING INTERNATIONAL believes that the crew is a key
            element in ensuring the smooth, efficient, and safe operation of a
            vessel. We understand that effective crew management is essential to
            protecting the interests of both the vessel and its owners.
          </p>
          <p>
            Therefore, we implement a rigorous selection process, regular
            evaluations, performance-based incentives, and continuous training
            to ensure that every crew member possesses the highest level of
            competence and professionalism.
          </p>
        </div>
        {aboutUsData.map((item, index) => (
          <div className="flex gap-4" key={index}>
            <div className="p-3 h-fit rounded-[0.75rem] bg-secondary/10 flex items-center justify-center">
                <item.icon className="xl:size-6 size-4 lg:size-5 text-secondary"/>
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-primary xl:text-lg lg:text-base text-sm">{item.title}</h4>
                <p className="text-muted text-xs lg:text-sm xl:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
