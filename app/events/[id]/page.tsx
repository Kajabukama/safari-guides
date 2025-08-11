"use client";
import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { event } from "@/mock/events";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  HeartIcon,
  ShareIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  UserRoundIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LocationMap from "@/components/maps/LocationMap";
import { useAuth } from "@/components/providers/AuthProvider";
import Image from "next/image";

const EventDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { openLoginModal } = useAuth();
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
  return (
    <div className="min-h-screen">
      {/* Image Gallery */}
      <div className="relative">
        <div className="h-[60vh] bg-gray-200 overflow-hidden">
          <img
            src={event.images[activeImageIndex]}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image Thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {event.images.map((image, index) => (
            <button
              key={index}
              className={`w-16 h-10 rounded-md overflow-hidden border-2 ${
                activeImageIndex === index ? "border-white" : "border-transparent opacity-70"
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsLiked(!isLiked)}
          >
            <HeartIcon
              size={20}
              className={isLiked ? "text-red-500 fill-red-500" : "text-gray-700"}
            />
          </button>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
            <ShareIcon size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold">{event.title}</h1>
                <div className="flex items-center">
                  <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    Workshop
                  </span>
                </div>
              </div>
              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CalendarIcon size={18} className="text-emerald-600 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon size={18} className="text-emerald-600 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon size={18} className="text-emerald-600 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon size={18} className="text-emerald-600 mr-2" />
                  <span>
                    {event.currentParticipants} of {event.maxParticipants} spots filled
                  </span>
                </div>
              </div>
              {/* Guide Information */}
              <div className="flex items-center mb-6">
                <img
                  src={event.guideImage}
                  alt={event.guideName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Hosted by {event.guideName}</p>
                  <p className="text-gray-600 text-sm">{event.guideExperience} experience</p>
                </div>
              </div>
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <p className="whitespace-pre-line">{event.description}</p>
              </div>
              {/* Tabs */}
              <Tabs defaultValue="schedule" className="mb-8">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="includes">What's Included</TabsTrigger>
                  <TabsTrigger value="participants">Participants</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                {/* Schedule Tab */}
                <TabsContent value="schedule" className="mt-6">
                  <div className="space-y-4">
                    {event.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="relative pl-8 pb-4 border-l-2 border-emerald-100 dark:border-emerald-800 last:border-0"
                      >
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                        <h3 className="text-lg font-semibold mb-1">{item.time}</h3>
                        <p className="text-muted-foreground">{item.activity}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* Includes Tab */}
                <TabsContent value="includes" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {event.includes.map((item, index) => (
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
                      <h3 className="text-lg font-semibold mb-4">What to Bring</h3>
                      <ul className="space-y-2">
                        {event.requirements.map((item, index) => (
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
                  </div>
                </TabsContent>
                {/* Participants Tab */}
                <TabsContent value="participants" className="mt-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Participants ({event.currentParticipants}/{event.maxParticipants})
                    </h3>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-1">
                      <div
                        className="bg-emerald-600 h-1 rounded-full"
                        style={{
                          width: `${(event.currentParticipants / event.maxParticipants) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {event.maxParticipants - event.currentParticipants} spots left
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {event.participants.map((participant) => (
                      <div key={participant.id} className="flex gap-x-5">
                        <div className="size-12 rounded-full relative">
                          <Image
                            src={participant.image}
                            alt={participant.name}
                            width={1640}
                            height={1640}
                            className="object-cover rounded-full w-full h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                          />
                          {participant.status === "confirmed" && (
                            <div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-0.5">
                              <CheckCircleIcon size={14} className="text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium text-base">{participant.name}</p>
                          <p className="text-sm text-muted-foreground">{participant.location}</p>
                        </div>
                      </div>
                    ))}
                    {/* Empty spots */}
                    {Array.from({
                      length: event.maxParticipants - event.currentParticipants,
                    }).map((_, index) => (
                      <div key={`empty-${index}`} className="flex my-4 gap-x-5">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <UserRoundIcon size={24} className="text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-medium text-base">Available</p>
                          <p className="text-sm text-muted-foreground">Available</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                {/* FAQ Tab */}
                <TabsContent value="faq" className="mt-6">
                  <div className="space-y-6">
                    {event.faqs.map((faq, index) => (
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
                  latitude={event.coordinates.lat}
                  longitude={event.coordinates.lng}
                  popupText={event.location}
                  height="400px"
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
              <Card className="shadow-none">
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold">{event.price}</span>
                      <span className="text-gray-600">per person</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between pb-4 border-b">
                      <div className="flex items-center">
                        <CalendarIcon size={18} className="text-gray-600 mr-2" />
                        <span>Date</span>
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b">
                      <div className="flex items-center">
                        <ClockIcon size={18} className="text-gray-600 mr-2" />
                        <span>Time</span>
                      </div>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <UsersIcon size={18} className="text-gray-600 mr-2" />
                        <span>Availability</span>
                      </div>
                      <span className="font-medium text-emerald-600">
                        {event.maxParticipants - event.currentParticipants} spots left
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full text-lg py-6" onClick={openLoginModal}>
                      Reserve a Spot
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquareIcon size={16} className="mr-2" />
                      Message Host
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    No payment required to reserve
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        {/* Similar Events */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would typically be populated with actual similar events */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1540000000000 + i * 10000
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`Similar Event ${i}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Photography Workshop {i}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <CalendarIcon size={14} className="mr-1" />
                    <span>June 20, 2023</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPinIcon size={14} className="mr-1 text-gray-600" />
                      <span className="text-sm text-gray-600">Serengeti</span>
                    </div>
                    <span className="font-semibold">$150</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
