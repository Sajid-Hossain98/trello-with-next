import { ModalProvider } from "@/components/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <ClerkProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
