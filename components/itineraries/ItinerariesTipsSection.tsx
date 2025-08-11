"use client";
import React from "react";
import { motion } from "framer-motion";

const ItinerariesTipsSection: React.FC = () => {
  const tips = [
    {
      title: "Best Time to Visit",
      description:
        "The dry seasons (June-October and December-February) offer the best wildlife viewing as animals gather around water sources.",
    },
    {
      title: "What to Pack",
      description:
        "Neutral colored clothing, hat, sunscreen, binoculars, camera with zoom lens, and light layers for temperature changes.",
    },
    {
      title: "Health Precautions",
      description:
        "Consult your doctor about malaria prevention, bring insect repellent, and ensure you have travel insurance coverage.",
    },
  ];

  return (
    <section className="mt-16 bg-emerald-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-4">Safari Planning Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ItinerariesTipsSection;
