"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
};

export const ConfirmModal = ({
  children,
  onConfirm
}: ConfirmModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialogContent>
    </AlertDialog>
  )
}