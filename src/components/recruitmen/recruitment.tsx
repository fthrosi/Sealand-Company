// "use client";

// import { BadgeCheck, GraduationCap, Users } from "lucide-react";
// import { motion,easeOut } from "motion/react";
// export default function Recruitment() {
//   const titleVarian = {
//     hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
//     show: {
//       opacity: 1,
//       clipPath: "inset(0% 0% 0% 0%)",
//       transition: { duration: 1, ease: easeOut },
//     },
//   };
//   const itemVariant = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0 },
//   };
//   const containerVariant = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.2,
//       },
//     },
//   };
//   return (
//     <section
//       id="recruitment"
//       className="container-layout py-24 flex flex-col items-center justify-center 2xl:gap-16 lg:gap-14 xl:gap-15 md:gap-12 gap-8"
//     >
//       <div className="flex flex-col items-center 2xl:gap-6 gap-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full"
//         >
//           <h2 className="text-secondary xl:text-sm lg:text-xs text-[0.625rem]">
//             How We Work
//           </h2>
//         </motion.div>
//         <motion.div
//         variants={containerVariant}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="flex flex-col items-center gap-4">
//           <motion.h2
//           variants={titleVarian}
//           className="text-primary xl:text-5xl text-xl md:text-3xl lg:text-4xl font-bold text-center">
//             Our Recruitment Process
//           </motion.h2>
//           <motion.p
//           variants={itemVariant}
//           className="xl:w-182.5 max-w-100 sm:w-100 lg:w-140 text-muted text-center text-xs lg:text-base">
//             A streamlined, three-step approach ensuring only the most qualified
//             maritime professionals join your crew
//           </motion.p>
//         </motion.div>
//       </div>
//       <motion.div
//       variants={containerVariant}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="relative w-full flex flex-col lg:flex-row items-center gap-8">
//         <motion.hr
//         variants={titleVarian}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="absolute lg:block hidden w-full border border-secondary md:top-20 lg:top-25" />
//         <motion.div
//         variants={itemVariant}
//         className="md:w-1/3 w-full flex flex-col items-center gap-6">
//           <div className="p-6.5 rounded-full bg-linear-to-br from-secondary to-accent w-fit">
//             <BadgeCheck className="lg:size-12.5 size-7 text-white" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
//               Competency Test
//             </h3>
//             <p className="text-muted text-center text-xs xl:text-base w-60 xl:w-70">
//               CEST Test and English Marline Test ensure technical and language
//               proficiency.
//             </p>
//           </div>
//         </motion.div>
//         <motion.div
//         variants={itemVariant}
//         className="md:w-1/3 w-full flex flex-col items-center gap-6">
//           <div className="p-6.5 rounded-full bg-linear-to-br from-secondary to-accent w-fit">
//             <Users className="lg:size-12.5 size-7 text-white" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
//               Professional Interviews
//             </h3>
//             <p className="text-muted text-center text-xs xl:text-base w-60 xl:w-70">
//               Thorough screening by maritime experts validates qualifications
//               and experience.
//             </p>
//           </div>
//         </motion.div>
//         <motion.div
//         variants={itemVariant}
//         className="md:w-1/3 w-full flex flex-col items-center gap-6">
//           <div className="p-6.5  rounded-full bg-linear-to-br from-secondary to-accent w-fit">
//             <GraduationCap className="lg:size-12.5 size-7 text-white" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
//               Specialized Training
//             </h3>
//             <p className="text-muted text-center text-xs xl:text-base w-64 lg:w-72 xl:w-95">
//               Custom training programs address specific vessel requirements and
//               client needs to ensure the best crew we provide.
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { CheckCircle2, Users, Award, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function RecruitmentSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Competency Test",
      description:
        "CEST Test and English Marine Test ensure technical and language proficiency.",
      icon: CheckCircle2,
      details:
        "We assess your technical maritime knowledge and English communication skills to ensure you meet international standards.",
      color: "bg-blue-500",
      bgImage: "/images/lowongan.jpeg",
    },
    {
      id: 2,
      title: "Professional Interviews",
      description:
        "Thorough screening by maritime experts validates qualifications and experience.",
      icon: Users,
      details:
        "Our experienced maritime professionals conduct detailed interviews to evaluate your expertise and fit with our team.",
      color: "bg-teal-500",
      bgImage: "/images/6.jpeg",
    },
    {
      id: 3,
      title: "Specialized Training",
      description:
        "Custom training programs address specific vessel requirements and client needs.",
      icon: Award,
      details:
        "We provide comprehensive training tailored to your specific role and the vessel requirements.",
      color: "bg-cyan-500",
      bgImage: "/images/teknik.jpeg",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="container-layout">
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center 2xl:gap-6 gap-4 text-center mb-16 md:mb-20">
            <motion.div
              // variants={cardVariant}
              className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full"
            >
              <h2 className="text-secondary xl:text-sm lg:text-xs text-[0.625rem]">
                Our Recruitment Process
              </h2>
            </motion.div>
            <h1 className=" xl:text-5xl text-2xl md:text-3xl text-primary lg:text-4xl font-bold text-center mb-6 text-pretty">
              Join Our Maritime Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A streamlined, three-step approach ensuring only the most
              qualified maritime professionals join our crew
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const status =
                activeStep > step.id
                  ? "completed"
                  : activeStep === step.id
                  ? "current"
                  : "upcoming";

              return (
                <div
                  key={step.id}
                  className="recruitment-step cursor-pointer group relative rounded-xl overflow-hidden"
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={step.bgImage || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover w-full h-full"
                      priority={index === 0}
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-black/70"></div>
                  </div>

                  <div className="relative z-10 p-6">
                    <div className="relative">
                      <div className={`step-number ${status} mb-4`}>
                        {status === "completed" ? (
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                        ) : (
                          <span
                            className={`text-2xl font-bold ${
                              status === "current"
                                ? "text-accent"
                                : "text-white"
                            }`}
                          >
                            {step.id}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-white/90">
                        {step.description}
                      </p>

                      {/* Hover indicator */}
                      <div
                        className={`absolute top-0 right-0 w-1 h-12 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          status === "current" ? "opacity-100" : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Status border indicator */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                      status === "current"
                        ? "border-2 border-accent"
                        : status === "completed"
                        ? "border-2 border-accent/50"
                        : "border-2 border-white/20"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {steps[activeStep - 1].title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {steps[activeStep - 1].details}
                </p>

                {/* Progress indicator */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-light-blue transition-all duration-300"
                      style={{ width: `${(activeStep / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-accent">
                    {activeStep}/{steps.length}
                  </span>
                </div>
              </div>

              {/* Visual indicator */}
              <div className="w-full md:w-48 h-48 md:h-48 rounded-lg bg-linear-to-br from-primary/60 to-light-blue/60 flex items-center justify-center shrink-0">
                {(() => {
                  const Icon = steps[activeStep - 1].icon;
                  return (
                    <div className="text-center">
                      <Icon className="w-20 h-20 text-white mx-auto mb-2" />
                      <p className="text-sm font-semibold text-white">
                        Step {activeStep}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to start your maritime career journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"#career"}
                className="bg-primary rounded-2xl text-white hover:bg-primary/90 p-4"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
