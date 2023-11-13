"use client";

import { Id } from "@/convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

interface MenuProps {
  documentId: Id<"documents">;
};

export const Menu = ({
  documentId
}: MenuProps) => {
  return (
    <div>
      Menu
    </div>
  )
}