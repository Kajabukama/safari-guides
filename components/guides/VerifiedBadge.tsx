import React from "react";
import { CheckCircleIcon } from "@/components/icons";

function VerifiedBadge({ verified }: { verified: boolean }) {
  return (
    <div className="size-6 p-0 flex items-center justify-center absolute top-2 right-2 bg-transparent text-yellow-500 dark:text-white dark:opacity-80 rounded-full">
      {verified ? <CheckCircleIcon className="w-6 h-6 " /> : "Not Verified"}
    </div>
  );
}

export default VerifiedBadge;
