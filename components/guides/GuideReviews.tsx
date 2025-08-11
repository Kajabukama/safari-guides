"use client";
import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import GuideContactForm from "../GuideContactForm";
import { guide } from "@/mock/guide-profile";

interface Review {
  id: number;
  name: string;
  image: string;
  country: string;
  date: string;
  rating: number;
  text: string;
}

interface GuideReviewsProps {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
  guideName: string;
}

const GuideReviews: React.FC<GuideReviewsProps> = ({
  reviews,
  averageRating,
  reviewCount,
  guideName,
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Reviews ({reviewCount})</h2>
            <p className="text-muted-foreground">See what travelers are saying about {guideName}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-muted p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    size={20}
                    className={`${
                      star <= Math.round(averageRating)
                        ? "text-yellow-500 fill-current"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{averageRating}</span>
            </div>
            <p className="text-sm text-muted-foreground">Based on {reviewCount} reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="flex-grow">
                    <div className="flex gap-x-2 w-full">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">
                              {review.country}
                            </span>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                        {/* <div className="flex mt-1 sm:mt-0">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                              key={star}
                              size={16}
                              className={`${
                                star <= review.rating
                                  ? "text-yellow-500 fill-current"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div> */}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <GuideContactForm name={guide.name} />
        </div>
      </div>
    </motion.div>
  );
};

export default GuideReviews;
