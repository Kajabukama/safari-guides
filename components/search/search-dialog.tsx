"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MapPinIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SearchDialogProps {
  children?: React.ReactNode;
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="icon">
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="guides">Find Guides</TabsTrigger>
            <TabsTrigger value="safaris">Safari Packages</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-4">
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
                <Button className="w-full md:w-auto" onClick={() => setOpen(false)}>
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Find Guides
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="safaris" className="space-y-4">
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
                <Link href="/safaris" onClick={() => setOpen(false)}>
                  <Button className="w-full md:w-auto">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Find Safaris
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
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
                <Button className="w-full md:w-auto" onClick={() => setOpen(false)}>
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Find Events
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accommodation" className="space-y-4">
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
                <Button className="w-full md:w-auto" onClick={() => setOpen(false)}>
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Find Places
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
