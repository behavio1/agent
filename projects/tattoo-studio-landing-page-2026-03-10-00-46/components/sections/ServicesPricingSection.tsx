"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export function ServicesPricingSection() {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-zinc-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Services & Pricing</h2>
          <p className="text-lg text-zinc-400">
            Professional body art tailored to your style. We offer competitive rates for custom pieces and walk-ins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:border-zinc-700 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-800 text-zinc-300 whitespace-nowrap">
                  {service.startingPrice}
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
            * All prices are estimates. Final cost depends on size, detail, and placement.
            A $100 non-refundable deposit is required to secure an appointment and will be deducted from your final session.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
