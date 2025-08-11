"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckIcon, AwardIcon, UserIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import GuideContactForm from "@/components/GuideContactForm";

interface GuideAboutProps {
  guide: {
    name: string;
    bio: string;
    specialties: string[];
    certifications: string[];
    education: string[];
    achievements: string[];
  };
}

const GuideAbout: React.FC<GuideAboutProps> = ({ guide }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="lg:col-span-2">
        <div className="mb-8 border-none shadow-none">
          <div className="">
            <h2 className="text-xl font-semibold mb-4">About {guide.name}</h2>
            <p className="text-lg mb-6 leading-relaxed">{guide.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <AwardIcon size={18} className="text-primary mr-2" />
                  Certifications & Training
                </h3>
                <ul className="mb-6 space-y-2">
                  {guide.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon size={16} className="text-primary mr-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <UserIcon size={18} className="text-primary mr-2" />
                  Education
                </h3>
                <ul className="mb-6 space-y-2">
                  {guide.education.map((edu, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon size={16} className="text-primary mr-2 flex-shrink-0" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <StarIcon size={18} className="text-primary mr-2" />
                Achievements
              </h3>
              <ul className="mb-6 space-y-2">
                {guide.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {guide.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Sidebar */}
      <GuideContactForm name={guide.name} />
    </motion.div>
  );
};

export default GuideAbout;
