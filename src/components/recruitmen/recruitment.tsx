"use client";

import { BadgeCheck, GraduationCap, Users } from "lucide-react";
import { motion,easeOut } from "motion/react";
export default function Recruitment() {
  const titleVarian = {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
    },
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section
      id="recruitment"
      className="container-layout py-24 flex flex-col items-center justify-center 2xl:gap-16 lg:gap-14 xl:gap-15 md:gap-12 gap-8"
    >
      <div className="flex flex-col items-center 2xl:gap-6 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:px-5 py-2 px-3 bg-secondary/10 w-fit rounded-full"
        >
          <h2 className="text-secondary xl:text-sm lg:text-xs text-[0.625rem]">
            How We Work
          </h2>
        </motion.div>
        <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4">
          <motion.h2
          variants={titleVarian}
          className="text-primary xl:text-5xl text-xl md:text-3xl lg:text-4xl font-bold text-center">
            Our Recruitment Process
          </motion.h2>
          <motion.p
          variants={itemVariant}
          className="xl:w-182.5 max-w-100 sm:w-100 lg:w-140 text-muted text-center text-xs lg:text-base">
            A streamlined, three-step approach ensuring only the most qualified
            maritime professionals join your crew
          </motion.p>
        </motion.div>
      </div>
      <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full flex flex-col lg:flex-row items-center gap-8">
        <motion.hr
        variants={titleVarian}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute lg:block hidden w-full border border-secondary md:top-20 lg:top-25" />
        <motion.div
        variants={itemVariant}
        className="md:w-1/3 w-full flex flex-col items-center gap-6">
          <div className="p-6.5 rounded-full bg-linear-to-br from-secondary to-accent w-fit">
            <BadgeCheck className="lg:size-12.5 size-7 text-white" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
              Competency Test
            </h3>
            <p className="text-muted text-center text-xs xl:text-base w-60 xl:w-70">
              CEST Test and English Marline Test ensure technical and language
              proficiency.
            </p>
          </div>
        </motion.div>
        <motion.div
        variants={itemVariant}
        className="md:w-1/3 w-full flex flex-col items-center gap-6">
          <div className="p-6.5 rounded-full bg-linear-to-br from-secondary to-accent w-fit">
            <Users className="lg:size-12.5 size-7 text-white" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
              Professional Interviews
            </h3>
            <p className="text-muted text-center text-xs xl:text-base w-60 xl:w-70">
              Thorough screening by maritime experts validates qualifications
              and experience.
            </p>
          </div>
        </motion.div>
        <motion.div
        variants={itemVariant}
        className="md:w-1/3 w-full flex flex-col items-center gap-6">
          <div className="p-6.5  rounded-full bg-linear-to-br from-secondary to-accent w-fit">
            <GraduationCap className="lg:size-12.5 size-7 text-white" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-primary xl:text-xl text-base font-semibold text-center">
              Specialized Training
            </h3>
            <p className="text-muted text-center text-xs xl:text-base w-64 lg:w-72 xl:w-95">
              Custom training programs address specific vessel requirements and
              client needs to ensure the best crew we provide.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
