"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Dog, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Logo } from "@/components/logo";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        className="block md:hidden mr-2"
        size="sm"
        variant="ghost"
        onClick={onOpen}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SheetHeader className="text-2xl font-extrabold underline underline-offset-4 mb-4 pl-2 font-mono text-orange-500">
            To-dofy
            <SheetDescription>
              Manage your projects with To-dofy.
            </SheetDescription>
          </SheetHeader>
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
