"use client";

import { ChevronsLeftRight } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const UserItem = () => {
  const { user } = useUser();

  return (
    <div>
      User item
    </div>
  )
}