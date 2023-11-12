"use client";

import { useMutation } from "convex/react";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

interface TitleProps {
  initialData: Doc<"documents">;
};

export const Title = ({
  initialData
}: TitleProps) => {
  const update = useMutation(api.documents.update);

  return (
    <div>
      Title
    </div>
  );
};