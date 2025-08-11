"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  StarIcon,
  MapPinIcon,
  UsersIcon,
  CheckCircleIcon,
  ClockIcon,
  CompassIcon,
  UtensilsIcon,
  TentIcon,
  CarIcon,
  X as XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/components/providers/AuthProvider";
import { itinerary } from "@/mock/itinerary";
import Image from "next/image";
import LocationMap from "@/components/maps/LocationMap";
import SimilarItineraries from "@/components/itineraries/SimilarItineraries";
import ItineraryImageSlider from "@/components/itineraries/ItineraryImageSlider";

const ItineraryDetail = () => {
  const { openLoginModal } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Animation variants
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="min-h-screen">
      {/* Image Gallery */}
      <ItineraryImageSlider
        itinerary={itinerary}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold">{itinerary.title}</h1>
                <div className="flex items-center">
                  <StarIcon size={20} className="text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{itinerary.rating}</span>
                  <span className="ml-1 text-muted-foreground">
                    ({itinerary.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPinIcon size={18} className="mr-1" />
                <span>{itinerary.location}</span>
              </div>
              {/* Guide Information */}
              <div className="flex items-center mb-6">
                <Image
                  src={itinerary.guideImage}
                  alt={itinerary.guideName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={1920}
                  height={1080}
                />
                <div>
                  <p className="font-medium">Guided by {itinerary.guideName}</p>
                  <p className="text-muted-foreground text-sm">
                    {itinerary.guideExperience} experience
                  </p>
                </div>
              </div>
              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center">
                  <CalendarIcon size={18} className="text-emerald-600 mr-2" />
                  <span>{itinerary.duration}</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon size={18} className="text-emerald-600 mr-2" />
                  <span>Up to {itinerary.maxGuests} guests</span>
                </div>
                <div className="flex items-center">
                  <CompassIcon size={18} className="text-emerald-600 mr-2" />
                  <span>Guided tour</span>
                </div>
              </div>
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About This Safari</h2>
                <p className="whitespace-pre-line">{itinerary.description}</p>
              </div>
              {/* Tabs */}
              <Tabs defaultValue="itinerary" className="mb-8">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">What&apos;s Included</TabsTrigger>
                  <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="mt-6">
                  <div className="space-y-6">
                    {itinerary.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="relative pl-8 pb-6 border-l-2 border-emerald-100 dark:border-emerald-800 last:border-0"
                      >
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                        <h3 className="text-lg font-semibold mb-2">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Includes Tab */}
                <TabsContent value="includes" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What&apos;s Included</h3>
                      <ul className="space-y-2">
                        {itinerary.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon
                              size={18}
                              className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What&apos;s Not Included</h3>
                      <ul className="space-y-2">
                        {itinerary.excludes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <XIcon size={18} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                {/* Accommodation Tab */}
                <TabsContent value="accommodation" className="mt-6">
                  <div className="space-y-6">
                    {itinerary.accommodations.map((accommodation, index) => (
                      <div key={index} className="brounded-2xl overflow-hidden">
                        <div className="flex gap-x-10">
                          <div className="relative size-24 rounded-xl">
                            <Image
                              priority
                              width={1600}
                              height={1600}
                              src={accommodation.image}
                              alt={accommodation.name}
                              className="object-cover transition-all duration-300 group-hover:scale-105 rounded-xl w-full h-full"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="">
                            <h3 className="text-lg font-semibold mb-2">{accommodation.name}</h3>
                            <p className="text-muted-foreground mb-4">
                              {accommodation.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-accent px-3 py-1 rounded-full text-sm flex items-center">
                                <TentIcon size={14} className="mr-1" /> Safari Accommodation
                              </span>
                              <span className="bg-accent px-3 py-1 rounded-full text-sm flex items-center">
                                <UtensilsIcon size={14} className="mr-1" /> Full Board
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Reviews Tab */}
                <TabsContent value="reviews" className="mt-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            size={20}
                            className={`${
                              star <= Math.round(itinerary.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">{itinerary.rating}</span>
                      <span className="ml-1 text-gray-600">({itinerary.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {itinerary.reviews.map((review) => (
                      <div className="flex-grow" key={review.id}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <div className="flex items-center gap-x-2">
                            <div className="relative size-14 aspect-square">
                              <Image
                                src={review.image}
                                alt={review.name}
                                width={1600}
                                height={1600}
                                className="w-full h-full rounded-full mr-4 object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center">
                                <span className="text-sm text-muted-foreground mr-2">
                                  {review.country}
                                </span>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex mt-1 sm:mt-0">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                size={16}
                                className={`${
                                  star <= review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* FAQ Tab */}
                <TabsContent value="faq" className="mt-6">
                  <div className="space-y-6">
                    {itinerary.faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              {/* Map */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <LocationMap
                  latitude={itinerary.coordinates.lat.toString()}
                  longitude={itinerary.coordinates.lng.toString()}
                />
              </div>
            </motion.div>
          </div>
          {/* Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="sticky top-24"
            >
              <Card className="p-6 border shadow-none">
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{itinerary.price}</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between pb-4 border-b">
                    <div className="flex items-center">
                      <CalendarIcon size={18} className="text-muted-foreground mr-2" />
                      <span>Duration</span>
                    </div>
                    <span className="font-medium">{itinerary.duration}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b">
                    <div className="flex items-center">
                      <UsersIcon size={18} className="text-muted-foreground mr-2" />
                      <span>Group Size</span>
                    </div>
                    <span className="font-medium">Up to {itinerary.maxGuests} people</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b">
                    <div className="flex items-center">
                      <ClockIcon size={18} className="text-muted-foreground mr-2" />
                      <span>Start Time</span>
                    </div>
                    <span className="font-medium">Morning</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <CarIcon size={18} className="text-muted-foreground mr-2" />
                      <span>Transport</span>
                    </div>
                    <span className="font-medium">4x4 Safari Vehicle</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full text-lg py-6" onClick={openLoginModal}>
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Guide
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  No payment required to book
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
        {/* Similar Itineraries */}
        <SimilarItineraries />
      </div>
    </div>
  );
};
export default ItineraryDetail;
