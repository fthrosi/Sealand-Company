"use client";
import { vesselColumns } from "./columns";
import { DataTable } from "./data-table";
import { vesselData } from "@/const/vessels";
import {motion,easeOut} from "motion/react";

export default function Vessels() {
  const titleVarian = {
    hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: easeOut },
    },
  };
  return (
    <section id="vessel" className="container-layout lg:h-dvh flex items-center">
      <div className="w-full">
        <motion.h2
        variants={titleVarian}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="font-bold lg:text-3xl text-2xl mb-8">Our Vessels</motion.h2>
        <DataTable columns={vesselColumns} data={vesselData} />
      </div>
    </section>
  );
}
