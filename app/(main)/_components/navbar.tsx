"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
};

export const Navbar = ({
  isCollapsed,
  onResetWidth
}: NavbarProps) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  return (
    <div>
      Navbar
    </div>
  );
};