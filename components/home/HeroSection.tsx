"use client";
import React from "react";
import { motion } from "framer-motion";
import { SearchIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="relative h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url('/images/img42.jpg')`,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          Discover Authentic Africa with Local Guides
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          Connect with experienced local guides who will show you the authentic beauty, wildlife,
          and culture of Africa
        </motion.p>
        <motion.div
          className="w-full max-w-4xl bg-card rounded-2xl overflow-hidden"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
        >
          <Tabs defaultValue="guides" className="w-full">
            <div className="flex p-2 bg-card rounded-t-2xl">
              <TabsList className="max-w-xl mx-auto w-full flex justify-start gap-2">
                <TabsTrigger value="guides">Find Guides</TabsTrigger>
                <TabsTrigger value="safaris">Safari Packages</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="guides" className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="All of Tanzania" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serengeti">Serengeti National Park</SelectItem>
                      <SelectItem value="kilimanjaro">Mount Kilimanjaro</SelectItem>
                      <SelectItem value="zanzibar">Zanzibar</SelectItem>
                      <SelectItem value="ngorongoro">Ngorongoro Crater</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SearchIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="safari">Safari Guide</SelectItem>
                      <SelectItem value="hiking">Hiking Guide</SelectItem>
                      <SelectItem value="cultural">Cultural Guide</SelectItem>
                      <SelectItem value="photography">Photography Guide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-auto">
                  <Button className="w-full md:w-auto">
                    <SearchIcon size={18} className="mr-2" />
                    Find Guides
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="safaris" className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serengeti">Serengeti National Park</SelectItem>
                      <SelectItem value="ngorongoro">Ngorongoro Crater</SelectItem>
                      <SelectItem value="tarangire">Tarangire National Park</SelectItem>
                      <SelectItem value="manyara">Lake Manyara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 days</SelectItem>
                      <SelectItem value="4-7">4-7 days</SelectItem>
                      <SelectItem value="8+">8+ days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-auto">
                  <Link href="/safaris">
                    <Button className="w-full md:w-auto">
                      <SearchIcon size={18} className="mr-2" />
                      Find Safaris
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="events" className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arusha">Arusha</SelectItem>
                      <SelectItem value="serengeti">Serengeti</SelectItem>
                      <SelectItem value="zanzibar">Zanzibar</SelectItem>
                      <SelectItem value="dar">Dar es Salaam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="next-month">Next Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-auto">
                  <Button className="w-full md:w-auto">
                    <SearchIcon size={18} className="mr-2" />
                    Find Events
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="accommodation" className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serengeti">Serengeti</SelectItem>
                      <SelectItem value="ngorongoro">Ngorongoro</SelectItem>
                      <SelectItem value="zanzibar">Zanzibar</SelectItem>
                      <SelectItem value="arusha">Arusha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SearchIcon className="h-5 w-5 text-muted-foreground mr-2" />
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lodge">Lodge</SelectItem>
                      <SelectItem value="camp">Tented Camp</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="homestay">Homestay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-auto">
                  <Button className="w-full md:w-auto">
                    <SearchIcon size={18} className="mr-2" />
                    Find Places
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
