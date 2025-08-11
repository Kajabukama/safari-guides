"use client";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, UsersIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/interfaces/event";
import { useAuth } from "@/components/providers/AuthProvider";

function EventBookingForm({ event }: { event: Event }) {
  const { openLoginModal } = useAuth();
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
    <div className="lg:col-span-1">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="sticky top-24">
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
              <Button className="w-full py-6" onClick={openLoginModal}>
                Reserve a Spot
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquareIcon size={16} className="mr-2" />
                Message Host
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              No payment required to reserve
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default EventBookingForm;
