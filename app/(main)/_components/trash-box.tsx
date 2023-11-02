"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api);

  return (
    <div>
      Trash box
    </div>
  )
};