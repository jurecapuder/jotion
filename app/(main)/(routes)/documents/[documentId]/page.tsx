"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentIdPage = ({
  params
}: DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId
  });

  if (document === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (document === null) {
    return (
      <div>
        Not found
      </div>
    );
  }

  return (
    <div>
      DocumentIdPage
    </div>
  );
}

export default DocumentIdPage;