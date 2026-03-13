"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dog, Star, Music, Heart } from "lucide-react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const handleReksioClick = () => {
    setClickCount((prev) => prev + 1);
    // Here we would normally play a sound effect or trigger a DB update
  };

  return (
    <main className="min-h-screen bg-sky-300 overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-yellow-300 opacity-80 animate-pulse">
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 text-yellow-300 opacity-80 animate-pulse delay-150">
        <Star size={48} fill="currentColor" />
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center z-10 mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 tracking-wider">
          Witaj u Reksia!
        </h1>
        <p className="text-2xl text-yellow-100 drop-shadow-md font-medium">
          Kliknij w Reksia, żeby się pobawić!
        </p>
      </motion.div>

      <div className="relative z-10 my-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer bg-white p-8 rounded-full shadow-2xl border-8 border-yellow-400 relative"
          onClick={handleReksioClick}
        >
          {/* Reksio Placeholder */}
          <Dog size={120} className="text-amber-700" strokeWidth={1.5} />
          
          {clickCount > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, y: -40 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2"
            >
              <Heart size={48} className="text-red-500 fill-red-500" />
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 flex flex-col items-center space-y-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl text-center border-4 border-white">
          <p className="text-3xl font-bold text-sky-600">
            Punkty radości: <span className="text-amber-500">{clickCount}</span>
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Button 
            size="lg" 
            className="rounded-full text-xl h-16 px-8 bg-green-500 hover:bg-green-600 border-4 border-green-700 shadow-[0_6px_0_rgb(21,128,61)] hover:translate-y-1 hover:shadow-[0_2px_0_rgb(21,128,61)] transition-all"
            onClick={() => alert("Graj muzykę! (funkcja wkrótce)")}
          >
            <Music className="mr-2 h-6 w-6" /> Zagraj piosenkę!
          </Button>
        </div>
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-32 bg-green-400 border-t-8 border-green-500"></div>
    </main>
  );
}
