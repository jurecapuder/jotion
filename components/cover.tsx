"use client";

import Image from "next/image";
import { ImageIcon, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({
  url,
  preview
}: CoverImageProps) => {
  return (
    <div className={cn(
      "relative w-full h-[35vh] group",
      !url && "h-[12vh]",
      url && "bg-muted"
    )}>
      {!!url && (
        <Image
          src={url}
          fill
          alt="Cover"
          className="object-cover"
        />
      )}

      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => {}}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />

            Change cover
          </Button>

          <Button
            onClick={() => {}}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />

            Remove
          </Button>
        </div>
      )}
    </div>
  )
};