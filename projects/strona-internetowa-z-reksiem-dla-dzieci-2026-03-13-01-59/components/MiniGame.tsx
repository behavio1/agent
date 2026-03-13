"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { incrementInteraction } from "../app/actions";
import { Bone, CheckCircle2, Sparkles } from "lucide-react";

type HiddenItem = {
  id: string;
  x: number;
  y: number;
  label: string;
  found: boolean;
};

const initialItems: HiddenItem[] = [
  { id: "bone1", x: 15, y: 20, label: "Krzak", found: false },
  { id: "bone2", x: 75, y: 40, label: "Buda", found: false },
  { id: "bone3", x: 45, y: 70, label: "Kamień", found: false },
  { id: "bone4", x: 80, y: 80, label: "Drzewo", found: false },
];

export function MiniGame() {
  const [items, setItems] = useState<HiddenItem[]>(initialItems);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const foundCount = items.filter((item) => item.found).length;

  const handleItemClick = (id: string) => {
    if (isCompleted) return;

    setItems((prev) => {
      const nextItems = prev.map((item) => {
        if (item.id === id && !item.found) {
          return { ...item, found: true };
        }
        return item;
      });

      const nextFoundCount = nextItems.filter((item) => item.found).length;
      if (nextFoundCount === nextItems.length && !isCompleted && !isSubmitting) {
        setIsCompleted(true);
        setIsSubmitting(true);
        incrementInteraction("bone_found")
          .then(() => {
            setIsSubmitting(false);
          })
          .catch((e) => {
            console.error("Error saving score:", e);
            setIsSubmitting(false);
          });
      }

      return nextItems;
    });
  };

  const handleReset = () => {
    setItems(initialItems);
    setIsCompleted(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 p-6 bg-green-100 rounded-3xl border-8 border-green-300 shadow-xl overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-800 flex items-center justify-center gap-3">
          <Sparkles className="text-yellow-500" size={32} />
          Znajdź wszystkie kości!
          <Sparkles className="text-yellow-500" size={32} />
        </h2>
        <p className="text-lg text-green-700 mt-2 font-medium">
          Znaleziono: {foundCount} z {items.length}
        </p>
      </div>

      <div className="relative w-full h-[400px] bg-green-200 rounded-2xl border-4 border-green-400 overflow-hidden shadow-inner">
        {/* Background scenery hints */}
        <div className="absolute inset-0 opacity-50 pointer-events-none flex items-center justify-center">
          <p className="text-2xl text-green-600 font-bold rotate-12">Szukaj w ogrodzie!</p>
        </div>

        {items.map((item) => (
          <motion.button
            key={item.id}
            className={`absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg ${
              item.found ? "bg-yellow-100 border-4 border-yellow-400 z-10" : "bg-green-500 border-4 border-green-600 z-20 hover:bg-green-400"
            } focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors`}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%, -50%)" }}
            whileHover={{ scale: item.found ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleItemClick(item.id)}
            aria-label={item.found ? "Znaleziona kość" : `Szukaj pod: ${item.label}`}
          >
            <AnimatePresence>
              {item.found ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Bone className="text-yellow-600 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                </motion.div>
              ) : (
                <div className="text-green-800 text-sm font-bold md:text-base">?</div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}

        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-30"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                className="bg-yellow-400 p-8 rounded-3xl shadow-2xl text-center border-8 border-yellow-300"
              >
                <CheckCircle2 className="w-20 h-20 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-extrabold text-yellow-900 mb-2">Udało się!</h3>
                <p className="text-xl text-yellow-800 font-bold mb-6">
                  Reksio jest bardzo szczęśliwy!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="bg-white text-yellow-600 text-xl font-black px-8 py-4 rounded-full shadow-lg border-4 border-yellow-100 hover:bg-yellow-50 transition-colors"
                >
                  Zagraj jeszcze raz
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
