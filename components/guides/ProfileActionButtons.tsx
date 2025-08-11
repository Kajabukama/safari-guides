import { CalendarIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

function ProfileActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
      <Button className="w-full md:w-auto">
        <CalendarIcon size={16} className="mr-2" />
        Check Availability
      </Button>
      <Button variant="outline" className="w-full md:w-auto">
        <MessageCircleIcon size={16} className="mr-2" />
        Contact Guide
      </Button>
    </div>
  );
}

export default ProfileActionButtons;
