import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
export default function Certificate() {
  return (
    <section id="certificate" className="py-24  bg-background-secondary">
      <div className="container-layout flex flex-col items-center gap-16">
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <h2 className="text-primary xl:text-text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            International Certification
          </h2>
          <p className="xl:w-182.5 sm:w-100 lg:w-140 text-muted text-center xl:text-lg text-xs lg:text-base">
            Accredited and certified by leading maritime authorities worldwide
          </p>
        </div>
        <div className="rounded-2xl w-fit bg-white border border-[#C9A85D] p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/imo.jpg"
            alt="imo"
            width={192}
            height={192}
            className="w-auto h-auto"
          />
          <div className="flex flex-col gap-6">
            <div className="lg:px-5 py-2 px-3 flex gap-2 items-center bg-[#C9A85D]/10 w-fit rounded-full">
              <CircleCheckBig className="lg:size-4 size-3 text-[#C9A85D]" />
              <h2 className="text-[#C9A85D] xl:text-sm lg:text-xs text-[0.625rem]">
                How We Work
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-primary lg:text-xl text-lg font-semibold">
                INTERNATIONAL STANDARDS COMPLIANCE
              </h3>
              <p className="text-muted lg:w-123 md:w-100 w-full text-xs lg:text-base">
                Our agency operates under internationally recognized quality
                standards, demonstrating our commitment to maintaining the
                highest quality management systems in maritime recruitment. This
                certification ensures consistent, reliable, and compliant
                service delivery.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CircleCheckBig className="lg:size-4 size-3 text-secondary" />
                <p className="lg:text-sm text-xs">STCW Standards</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className="lg:size-4 size-3 text-secondary" />
                <p className="lg:text-sm text-xs">IMO Regulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
