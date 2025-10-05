import * as React from "react";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export function AnimatedButton({ children, className, ...props }: React.ComponentProps<ButtonProps>) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        duration: 0.2,
      }}
      className="inline-block"
    >
      <Button className={cn("relative overflow-hidden", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}
