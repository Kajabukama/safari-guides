"use server";

// Temporarily disabled - depends on organization plugin
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// export const isAdmin = async () => {
//   try {
//     const { success, error } = await auth.api.hasPermission({
//       headers: await headers(),
//       body: {
//         permissions: {
//           organization: ["update", "delete"],
//         },
//       },
//     });

//     if (error) {
//       return {
//         success: false,
//         error: error || "Failed to check permissions",
//       };
//     }

//     return success;
//   } catch (error) {
//     console.error(error);
//     return {
//       success: false,
//       error: error || "Failed to check permissions",
//     };
//   }
// };

// Placeholder function
export const isAdmin = async () => {
  return {
    success: false,
    error: "Permission system temporarily disabled",
  };
};
