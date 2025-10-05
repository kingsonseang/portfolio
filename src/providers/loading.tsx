import * as React from "react";
import { Loader } from "@/components/ui/loader";

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Check if document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    // Wait for all resources (images, stylesheets, etc.) to load
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    // Fallback timeout in case something takes too long
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 second max wait

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}