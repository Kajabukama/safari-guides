"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { event } from "@/mock/event";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  HeartIcon,
  ShareIcon,
  CheckCircleIcon,
  UserRoundIcon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LocationMap from "@/components/maps/LocationMap";
import Image from "next/image";
import { Event } from "@/interfaces/event";
import { events } from "@/mock/events";
import SliderThumbnail from "@/components/SliderThumbnail";
import EventBookingForm from "@/components/events/EventBookingForm";
import SimilarEvents from "@/components/events/SimilarEvents";

const EventDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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
      <div className="relative">
        <div className="h-[60vh] overflow-hidden">
          <Image
            src={event.images[activeImageIndex]}
            alt={event.title}
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {event.images.map((image, index) => (
            <SliderThumbnail
              key={index}
              image={image}
              index={index}
              activeImageIndex={activeImageIndex}
              setActiveImageIndex={setActiveImageIndex}
            />
          ))}
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div
            className="bg-white rounded-full flex items-center justify-center p-2 shadow-md hover:bg-gray-100 transition-colors size-10"
            onClick={() => setIsLiked(!isLiked)}
          >
            <HeartIcon
              size={20}
              className={isLiked ? "text-red-500 fill-red-500" : "text-gray-700"}
            />
          </div>
          <div className="bg-white rounded-full flex items-center justify-center p-2 shadow-md hover:bg-gray-100 transition-colors size-10">
            <ShareIcon size={20} className="text-gray-700" />
          </div>
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
              <div className="flex items-center gap-x-3 mb-6">
                <div className="relative overflow-hidden rounded-full size-14">
                  <Image
                    src={event.guideImage}
                    alt={event.guideName}
                    className="w-full h-full object-cover mr-4"
                    width={1920}
                    height={1920}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <p className="font-medium">Hosted by {event.guideName}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.guideExperience} experience
                  </p>
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
                  <TabsTrigger value="includes">What&apos;s Included</TabsTrigger>
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
                      <h3 className="text-lg font-semibold mb-4">What&apos;s Included</h3>
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
                    <p className="text-sm text-muted-foreground">
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
                  latitude={event.coordinates.lat.toString()}
                  longitude={event.coordinates.lng.toString()}
                />
              </div>
            </motion.div>
          </div>
          {/* Booking Card */}
          <EventBookingForm event={event} />
        </div>
        {/* Similar Events */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {events.map((event: Event, index: number) => (
              <SimilarEvents key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
