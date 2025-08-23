import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/shop/animations";
import { collections } from "@/mock/shop";
import { Collection } from "@/interfaces/product";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

function FeaturedSection() {
  return (
    <motion.section
      className="py-12 "
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Featured Collections</h2>
          <Link
            href="/shop/collections"
            className="text-emerald-600 font-medium flex items-center hover:text-emerald-700"
          >
            View all collections
            <ArrowRightIcon size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((collection: Collection) => (
            <Link key={collection.id} href={`/shop/collection/${collection.id}`}>
              <motion.div
                className="relative rounded-lg overflow-hidden aspect-[4/3] group"
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Image
                  width={1200}
                  height={1200}
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{collection.name}</h3>
                  <p className="text-white/80 text-sm">{collection.count} products</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedSection;
