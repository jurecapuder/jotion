"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

interface BannerProps {
  documentId: Id<"documents">;
};

export const Banner = ({
  documentId
}: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);
  
  return (
    <div>
      Banner
    </div>
  )
}