import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
