"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { service } from "@/mock/service";
import { motion } from "framer-motion";
import { MessageSquareIcon, CalendarIcon, ChevronDownIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/components/providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

function ServiceBookingForm() {
  const { openLoginModal } = useAuth();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  const form = useForm({
    defaultValues: {
      checkIn: new Date(),
      checkOut: addDays(new Date(), 1),
      guests: "1",
    },
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const onSubmit = (data: unknown) => {
    console.log(data);
    openLoginModal();
  };

  return (
    <div className="lg:col-span-1">
      <motion.div variants={fadeIn} initial="hidden" animate="visible" className="sticky top-24">
        <Card className="p-6 border shadow-none">
          <div className="mb-4">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold">{service.price}</span>
              <span className="text-muted-foreground">
                {service.type === "accommodation" ? "/ night" : ""}
              </span>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {service.type === "accommodation" && (
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="checkIn"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <label className="text-sm font-medium mb-1">Check-in</label>
                          <div className="w-full">
                            <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger className="w-full h-12 rounded-full" asChild>
                                <Button
                                  variant="outline"
                                  id="date"
                                  className="w-full justify-between font-normal px-4"
                                >
                                  <CalendarIcon size={16} />
                                  {date.from ? format(date.from, "yyyy-MM-dd") : "Select date"}
                                  <ChevronDownIcon />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto overflow-hidden rounded-xl"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={date.from}
                                  {...field}
                                  captionLayout="dropdown"
                                  onSelect={(date) => {
                                    setDate({ from: date, to: undefined });
                                    setOpen(false);
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="checkOut"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <label className="text-sm font-medium mb-1">Check-out</label>
                          <div className="w-full">
                            <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger className="w-full h-12 rounded-full" asChild>
                                <Button
                                  variant="outline"
                                  id="date"
                                  className="w-full justify-between font-normal px-4"
                                >
                                  <CalendarIcon size={16} />
                                  {date.from ? format(date.from, "yyyy-MM-dd") : "Select date"}
                                  <ChevronDownIcon />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto overflow-hidden rounded-xl"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={date.from}
                                  captionLayout="dropdown"
                                  {...field}
                                  onSelect={(date) => {
                                    setDate({ from: date, to: undefined });
                                    setOpen(false);
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <label className="text-sm font-medium mb-1 block">Guests</label>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "guest" : "guests"}
                              </SelectItem>
                            ))}
                            <SelectItem value="6+">6+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              <div className="space-y-3">
                <Button type="submit" className="w-full text-lg py-6">
                  {service.type === "accommodation" ? "Book Now" : "Reserve Now"}
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  <MessageSquareIcon size={16} className="mr-2" />
                  Contact Provider
                </Button>
              </div>
              <div className="mt-4 text-center text-md text-muted-foreground">
                No payment required to book
              </div>
            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}

export default ServiceBookingForm;
