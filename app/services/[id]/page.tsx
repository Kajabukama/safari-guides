"use client";
import React, { useState, Children } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  StarIcon,
  MapPinIcon,
  HeartIcon,
  ShareIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  UtensilsIcon,
  WifiIcon,
  TvIcon,
  BedDoubleIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LocationMap from "@/components/maps/LocationMap";
import { useAuth } from "@/components/providers/AuthProvider";
import { service } from "@/mock/service";
import Image from "next/image";
import ServiceImageSlider from "@/components/services/ServiceImageSlider";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import SimilarServicesList from "@/components/services/SimilarServicesList";

const ServiceDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const [isLiked, setIsLiked] = useState(false);
  // In a real app, this data would be fetched from an API

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
  // Function to get appropriate icon based on feature text
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("bathroom") || feature.toLowerCase().includes("shower")) {
      return <div className="text-emerald-600 mr-2" />;
    } else if (feature.toLowerCase().includes("bed")) {
      return <BedDoubleIcon size={18} className="text-emerald-600 mr-2" />;
    } else if (feature.toLowerCase().includes("wifi")) {
      return <WifiIcon size={18} className="text-emerald-600 mr-2" />;
    } else if (feature.toLowerCase().includes("meal") || feature.toLowerCase().includes("dining")) {
      return <UtensilsIcon size={18} className="text-emerald-600 mr-2" />;
    } else if (feature.toLowerCase().includes("tv")) {
      return <TvIcon size={18} className="text-emerald-600 mr-2" />;
    } else {
      return <CheckCircleIcon size={18} className="text-emerald-600 mr-2" />;
    }
  };
  return (
    <div className="min-h-screen">
      {/* Image Gallery */}
      <ServiceImageSlider
        service={service}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold">{service.title}</h1>
                <div className="flex items-center">
                  <StarIcon size={20} className="text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{service.rating}</span>
                  <span className="ml-1 text-muted-foreground">
                    ({service.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPinIcon size={18} className="mr-1" />
                <span>{service.location}</span>
              </div>
              {/* Service Provider Information */}
              <div className="flex items-center mb-6">
                <img
                  src={service.guideImage}
                  alt={service.guideName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Provided by {service.guideName}</p>
                  <p className="text-sm text-muted-foreground">
                    {service.guideExperience} experience
                  </p>
                </div>
              </div>
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  About This {service.type === "accommodation" ? "Accommodation" : "Service"}
                </h2>
                <p className="whitespace-pre-line">{service.description}</p>
              </div>
              {/* Tabs */}
              <Tabs defaultValue="features" className="mb-8">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="rooms">Room Options</TabsTrigger>
                  <TabsTrigger value="policies">Policies</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                {/* Features Tab */}
                <TabsContent value="features" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features?.map((feature, index) => (
                      <div key={index} className="flex items-start text-base">
                        {getFeatureIcon(feature)}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Rooms Tab */}
                <TabsContent value="rooms" className="mt-6">
                  <div className="space-y-6">
                    {service.rooms?.map((room, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden">
                        <div className="flex items-center">
                          <div className="p-6">
                            <div className="flex gap-x-5 mb-2">
                              <div className="size-14 relative rounded-full overflow-hidden">
                                <Image
                                  width={1920}
                                  height={1920}
                                  src={room.image}
                                  alt={room.type}
                                  className="w-full h-full object-cover"
                                  priority
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold">{room.type}</h3>
                                <div>
                                  <span className="font-bold text-emerald-600">{room.price}</span>
                                  <span className="text-muted-foreground"> / night</span>
                                </div>
                              </div>
                            </div>
                            <p className="mb-4">{room.description}</p>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center">
                                <UsersIcon size={16} className="text-gray-600 mr-1" />
                                <span className="text-sm">{room.capacity}</span>
                              </div>
                              <div className="flex items-center">
                                <BedDoubleIcon size={16} className="text-gray-600 mr-1" />
                                <span className="text-sm">{room.beds}</span>
                              </div>
                            </div>
                            <Button>Select</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Policies Tab */}
                <TabsContent value="policies" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-4 rounded-2xl">
                      <h3 className="font-semibold mb-2">Check-in / Check-out</h3>
                      <div className="flex justify-between mb-2">
                        <span>Check-in</span>
                        <span>{service.policies?.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-out</span>
                        <span>{service.policies?.checkOut}</span>
                      </div>
                    </div>
                    <div className="bg-card p-4 rounded-2xl">
                      <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                      <p>{service.policies?.cancellation}</p>
                    </div>
                    <div className="bg-card p-4 rounded-2xl">
                      <h3 className="font-semibold mb-2">Children</h3>
                      <p>{service.policies?.children}</p>
                    </div>
                    <div className="bg-card p-4 rounded-2xl">
                      <h3 className="font-semibold mb-2">Pets</h3>
                      <p>{service.policies?.pets}</p>
                    </div>
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
                              star <= Math.round(service.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">{service.rating}</span>
                      <span className="ml-1 text-muted-foreground">
                        ({service.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {service.reviews?.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex items-start">
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <div className="flex gap-x-4">
                                <div className="size-14 rounded-full overflow-hidden">
                                  <Image
                                    src={review.image}
                                    alt={review.name}
                                    width={1920}
                                    height={1920}
                                    className="w-full h-full rounded-full object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                  />
                                </div>
                                <div className="flex flex-col gap-y-1">
                                  <h4 className="font-semibold text-lg">{review.name}</h4>
                                  <div className="flex items-center gap-x-2 text-muted-foreground">
                                    <span className="text-sm">{review.country}</span>
                                    <span className="text-sm">{review.date}</span>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* FAQ Tab */}
                <TabsContent value="faq" className="mt-6">
                  <div className="space-y-6">
                    {service.faqs?.map((faq, index) => (
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
                  latitude={service.coordinates?.latitude?.toString() || "0"}
                  longitude={service.coordinates?.longitude?.toString() || "0"}
                />
              </div>
            </motion.div>
          </div>
          {/* Booking Card */}
          <ServiceBookingForm />
        </div>
        {/* Similar Services */}
        <SimilarServicesList service={service} />
      </div>
    </div>
  );
};
export default ServiceDetail;
