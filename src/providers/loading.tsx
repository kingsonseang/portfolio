import * as React from "react";
import { PageLoader } from "@/components/ui/page-loader";

// Global flag readable by any island (AnimatedSection etc.) even across React roots
declare global {
  interface Window {
    __pageLoaded?: boolean;
  }
}

const MIN_LOADER_DURATION = 2000; // matches page-loader.tsx default

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);

  // Lock scroll while loader is active to prevent page shifting
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoaderComplete = React.useCallback(() => {
    // Release scroll before fading in content
    document.body.style.overflow = "";
    // Signal all AnimatedSection islands that the page is ready
    window.__pageLoaded = true;
    window.dispatchEvent(new Event("page-loaded"));
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <PageLoader
          onComplete={handleLoaderComplete}
          minDuration={MIN_LOADER_DURATION}
        />
      )}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.35s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}