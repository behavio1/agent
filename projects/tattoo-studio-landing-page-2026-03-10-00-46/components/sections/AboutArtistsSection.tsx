"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    } 
  },
};

export function AboutArtistsSection() {
  return (
    <section id="artists" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* About / Philosophy Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Meet Our Artists
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Our studio is built on a foundation of creativity, professionalism, and uncompromising hygiene standards. 
            We provide a welcoming environment where your ideas are transformed into timeless art by our dedicated, 
            award-winning artists.
          </motion.p>
        </div>

        {/* Artists Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {artists.map((artist) => (
            <motion.div 
              key={artist.id} 
              variants={itemVariants}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold tracking-tight">{artist.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zinc-800 text-sm font-medium text-zinc-300 rounded-full">
                    {artist.style}
                  </span>
                </div>
                <p className="text-zinc-400 leading-relaxed line-clamp-4">
                  {artist.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
