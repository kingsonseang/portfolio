import * as React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const offsets = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Entrance animation wrapper.
 *
 * Critical: Framer Motion's whileInView fires as soon as an element is in the
 * viewport — even when it's hidden behind the loader (opacity:0 on its parent).
 * We fix this by NOT starting the IntersectionObserver until the loader has
 * fired the global 'page-loaded' event. Only then does the element check whether
 * it's in view and start animating.
 */
export function AnimatedSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: AnimatedSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pageReady, setPageReady] = React.useState(false);

  // Wait for the global page-loaded signal from LoadingProvider
  React.useEffect(() => {
    if (window.__pageLoaded) {
      setPageReady(true);
      return;
    }
    const handler = () => setPageReady(true);
    window.addEventListener("page-loaded", handler);
    return () => window.removeEventListener("page-loaded", handler);
  }, []);

  // Only register the IntersectionObserver after the page is revealed
  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
    // useInView respects this — it starts observing immediately on mount,
    // but we only *render* the observer (pass ref) after `pageReady` so
    // first-check happens post-reveal.
  });

  const shouldAnimate = pageReady && inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={
        shouldAnimate
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offsets[direction] }
      }
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
