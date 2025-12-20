import { Ship } from "lucide-react";
import { portfolioData } from "@/const/portfolio";
export default function Portfolio() {
  return (
    <section id="portfolio" className="container-layout py-24 flex flex-col items-center justify-center 2xl:gap-16 lg:gap-14 xl:gap-15 md:gap-12 gap-8">
      <div className="flex flex-col items-center 2xl:gap-6 gap-4">
        <div className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full">
          <h2 className="text-secondary xl:text-sm lg:text-xs text-[0.625rem]">
            Our Portfolio
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-primary xl:text-5xl text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Current Fleet & Achievements
          </h2>
          <p className="xl:w-182.5 max-w-120 sm:w-100 lg:w-140 text-muted text-center text-xs lg:text-base">
            Active fleet management and upcoming vessel deliveries demonstrating
            our growth and reliability
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row 2xl:gap-6 xl:gap-4 lg:gap-2 gap-4">
        {portfolioData.map((item) => (
          <div key={item.title} className="lg:w-1/4 rounded-3xl 2xl:p-8 xl:p-6 p-4 bg-linear-to-b to-secondary from-[#1E3A5F]">
            <div className="rounded-2xl p-3.5 bg-white/10 w-fit">
              <item.icon className="lg:size-7 size-5 text-light-blue" />
            </div>
            <h3 className="text-white font-bold 2xl:text-5xl text-3xl mt-6">{item.number}</h3>
            <h4 className="text-white font-semibold 2xl:text-xl text-sm mt-3">
              {item.title}
            </h4>
            <p className="text-white/70 text-xs mt-2 xl:w-60.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
