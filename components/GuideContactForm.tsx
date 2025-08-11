"use client";
import { MessageCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function GuideContactForm({ name }: { name: string }) {
  return (
    <div>
      <div className="border rounded-2xl bg-card sticky top-14">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Contact {name}</h3>
          <form className="space-y-6">
            <div>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell the guide about your travel plans and ask any questions you may have."
              />
            </div>
            <Button className="w-full">
              <MessageCircleIcon size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GuideContactForm;
