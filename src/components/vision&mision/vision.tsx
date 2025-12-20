import { Eye, Target } from "lucide-react";

export default function VisionAndMision() {
  return (
    <section id="visi" className="py-24  bg-background-secondary">
      <div className="container-layout flex flex-col gap-16">
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <h2 className="text-primary xl:text-text-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Our Vision & Mission
          </h2>
          <p className="xl:w-182.5 sm:w-100 lg:w-140 text-muted text-center xl:text-lg text-xs lg:text-base">
            Guided by our core values, we strive to set the standard for
            maritime recruitment excellence
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-1/2 p-8 rounded-3xl bg-white drop-shadow-md flex flex-col xl:gap-6 gap-4">
            <div className="rounded-2xl p-3.5 bg-linear-to-r from-secondary to-accent w-fit">
              <Eye className="lg:size-7 size-5 text-white" />
            </div>
            <h3 className="text-primary xl:text-2xl lg:text-xl text-lg font font-semibold">
              Our Vision
            </h3>
            <p className="text-muted text-xs lg:text-sm xl:text-base">
              Our vision is to become that is constantly growing, has
              sustainable success and a proven track record of providing quality
              of Indonesian seafarers to the principal whole the world.
            </p>
          </div>
          <div className="sm:w-1/2 p-8 rounded-3xl drop-shadow-md bg-white flex flex-col xl:gap-6 gap-4">
            <div className="rounded-2xl p-3.5 bg-linear-to-r from-secondary to-accent w-fit">
              <Target className="lg:size-7 size-5 text-white" />
            </div>
            <h3 className="text-primary xl:text-2xl lg:text-xl text-lg font font-semibold">
              Our Mission
            </h3>
            <p className="text-muted text-xs lg:text-sm xl:text-base">
              The Corporation aims to provide ❹Quality Manpower to all it’s
              clients. To carry out this mission, the company has adopted and
              now also provides training services for its crew in order to
              further develop and accelerate their promotion thus sustaining the
              socio economic transformation of the community and the country as
              a whole.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
