"use client";

import { motion, easeOut } from "motion/react";

export function Gallery() {
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
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const images = [
    {
      src: "/images/1.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/2.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/3.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/4.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/5.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/6.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/7.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/8.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/9.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/10.jpeg",
      alt: "PT Sealand Team",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="galery" className="w-full bg-gallery py-16 md:py-24 lg:py-32">
      <div className="container-layout mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
        >
          <motion.h2
            variants={titleVarian}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gallery-foreground mb-4 text-balance"
          >
            Our Gallery
          </motion.h2>
          <motion.p
            variants={itemVariant}
            className="text-lg md:text-xl text-gallery-muted max-w-2xl mx-auto text-pretty"
          >
            Explore our curated collection of stunning designs and inspirations
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]"
        >
          {images.map((image, index) => (
            <motion.div
              variants={cardVariant}
              key={index}
              className={`group relative overflow-hidden rounded-lg ${image.span} cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gallery-overlay/80 via-gallery-overlay/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
