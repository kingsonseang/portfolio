import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f6f6f6]"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-16">
          <Loader2 className="animate-spin stroke-1" />
        </div>
      </div>
    </motion.div>
  );
}
