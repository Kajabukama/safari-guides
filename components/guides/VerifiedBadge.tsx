import React from "react";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";

function VerifiedBadge({ verified }: { verified: boolean }) {
  return (
    <div className="size-6 p-0.5 flex items-center justify-center absolute top-2 right-2 bg-accent text-primary rounded-full">
      {verified ? <BadgeCheck /> : "Not Verified"}
    </div>
  );
}

export default VerifiedBadge;
