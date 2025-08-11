"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  MapPinIcon,
  CheckIcon,
  CalendarIcon,
  MessageCircleIcon,
  GlobeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ProfileActionButtons from "./ProfileActionButtons";
import ProfilePriceSection from "./ProfilePriceSection";
import GuideProfileReviews from "./GuideProfileReviews";

interface GuideProfileInfoProps {
  guide: {
    name: string;
    image: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    location: string;
    experience: string;
    specialties: string[];
    languages: string[];
    price: string;
  };
}

const GuideProfileInfo: React.FC<GuideProfileInfoProps> = ({ guide }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div className="relative" initial="hidden" animate="visible" variants={fadeIn}>
      <div className="my-8">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="md:mr-8 mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="relative">
              <Image
                src={guide.image}
                alt={guide.name}
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-none"
              />
              {guide.verified && (
                <div className="absolute top-0 right-3 bg-primary text-primary-foreground p-1 border-4 border-white rounded-full">
                  <CheckIcon size={20} />
                </div>
              )}
            </div>
          </div>

          {/* Guide Info */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{guide.name}</h1>
                <p className="text-muted-foreground mb-4">
                  Professional Guide • {guide.experience} experience
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <GlobeIcon size={18} className="text-muted-foreground mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((language, index) => (
                      <span key={index} className="text-muted-foreground">
                        {language}
                        {index < guide.languages.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Social media links */}
                <div className="flex gap-3 mb-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FacebookIcon size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>
              <div className="md:mt-0 flex flex-col items-start md:items-end">
                <div className="flex w-full justify-between">
                  <GuideProfileReviews
                    rating={guide.rating}
                    location={guide.location}
                    reviewCount={guide.reviewCount}
                  />
                  <ProfilePriceSection price={guide.price} />
                </div>

                <ProfileActionButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GuideProfileInfo;
