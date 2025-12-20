import { DataContact, DataBusinessHours } from "@/const/contactUs";
import { Clock4, Phone } from "lucide-react";
export default function ContactUs() {
  return (
    <section id="contact" className="bg-primary flex items-center py-24 lg:min-h-dvh">
      <div className="container-layout flex flex-col items-center justify-center 2xl:gap-16 lg:gap-14 xl:gap-15 md:gap-12 gap-8">
        <div className="flex flex-col items-center 2xl:gap-6 gap-4">
          <div className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full">
            <h2 className="text-white xl:text-sm lg:text-xs text-[0.625rem]">
              Get In Touch
            </h2>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-white xl:text-5xl text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Contact Us
            </h2>
            <p className="xl:w-182.5 max-w-120 sm:w-120 lg:w-160 lg:max-w-160 text-muted text-center text-xs lg:text-base">
              Ready to take the next step? Reach out to our team for inquiries,
              partnerships, or career opportunities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-6">
          {DataContact.map((item, index) => (
            <div
              key={index}
              className="w-full p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-start gap-6"
            >
              <div className="md:p-4 p-2 rounded-xl bg-secondary">
                <item.icon className="text-white md:size-6 size-4" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-semibold lg:text-lg text-sm">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="rounded-3xl w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4467.949118100701!2d106.90376566747956!3d-6.119178957804852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ff134c3b391%3A0x23899102bd00bd30!2sJl.%20Mawar%20Luar%20No.20%2C%20RT.8%2FRW.15%2C%20Tugu%20Utara%2C%20Kec.%20Koja%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014260!5e0!3m2!1sid!2sid!4v1766158086008!5m2!1sid!2sid"
              width="100%"
              height="200%"
              loading="lazy"
              className="rounded-3xl h-[100vw] lg:h-full"
            ></iframe>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="p-8 border border-white/10 rounded-3xl flex flex-col gap-8">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-secondary rounded-2xl">
                  <Clock4 className="text-white md:size-6 size-4" />
                </div>
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="flex flex-col gap-4">
                {DataBusinessHours.map((item, index) => (
                  <div
                    className="pb-3 flex justify-between border-b border-white/10"
                    key={index}
                  >
                    <h4 className="text-white/80">{item.title}</h4>
                    <h4 className="text-white font-semibold">
                      {item.description}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-linear-to-br from-secondary to-accent rounded-3xl flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">
                Emergency Crew Support
              </h3>
              <p className="text-lg text-white/70">
                Our 24/7 emergency hotline is available for urgent crew matters,
                medical assistance, and critical operational support
              </p>
              <div className="flex gap-3">
                <Phone className="text-white md:size-6 size-4" />
                <h3 className="text-xl text-white">+86 18553294307</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
