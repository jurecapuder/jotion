"use client";

import { Doc, Id } from "@/convex/_generated/dataModel";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export const DocumentList = ({
  parentDocumentId,
  level = 0
}: DocumentListProps) => {
  return (
    <div>
      DocumentList
    </div>
  )
}