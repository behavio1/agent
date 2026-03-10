"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=2000"
          alt="Tattoo artist at work"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto h-full w-full pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
        >
          Ink That Speaks Volumes
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Premium custom tattoos in a clean, modern, and inspiring environment. Book your consultation today and bring your vision to life.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="#contact" className={cn(buttonVariants({ size: "lg" }), "text-lg px-8 py-6 w-full sm:w-auto")}>
            Book a Consultation
          </Link>
          <Link href="#portfolio" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg px-8 py-6 w-full sm:w-auto text-white border-white hover:bg-white hover:text-black")}>
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
