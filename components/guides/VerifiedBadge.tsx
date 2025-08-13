import React from "react";
import { Badge } from "@/components/ui/badge";

function VerifiedBadge({ verified }: { verified: boolean }) {
  return (
    <Badge className="absolute top-3 right-3 bg-white text-primary hover:bg-white">
      {verified ? "Verified" : "Not Verified"}
    </Badge>
  );
}

export default VerifiedBadge;
