import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface HeadingSectionProps {
  title: string;
  description: string;
  linkLabel?: string;
  url?: string;
  showLink?: boolean;
}

function HeadingSection({
  title,
  description,
  linkLabel,
  url,
  showLink = true,
}: HeadingSectionProps) {
  const header = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  } as const;

  return (
    <motion.div
      className="flex justify-between items-end my-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={header}
    >
      <div>
        <h2 className="lg:text-2xl text-xl font-semibold">{title}</h2>
        <p className="text-muted-foreground text-sm hidden lg:block md:block">{description}</p>
      </div>
      {showLink && (
        <Link href={url!} className="flex items-center text-sm bg-muted rounded-full py-1 px-4">
          {linkLabel!}
          <ArrowRightIcon size={18} className="ml-1" />
        </Link>
      )}
    </motion.div>
  );
}

export default HeadingSection;
