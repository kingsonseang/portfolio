import * as React from "react";
import ClickSpark from "@/components/ClickSpark";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home", ariaLabel: "Go to my home page" },
  { href: "/about", label: "About", ariaLabel: "Learn more about me" },
  { href: "/projects", label: "Projects", ariaLabel: "View my projects" },
  { href: "/contact", label: "Contact", ariaLabel: "Contact me" },
];

export default function Header({ currentPath }: { currentPath: string }) {
  const email = import.meta.env.PUBLIC_EMAIL || "me@kingsonseang.com";
  const cv = import.meta.env.PUBLIC_CV || "/cv";
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="text-secondary/50 flex items-center justify-between select-none">
      <div className="flex items-center gap-4 max-md:hidden">
        <div className="flex items-center gap-4 rounded-full bg-white/50 p-1">
          <span className="pl-5 text-sm">{email}</span>

          <ClickSpark
            sparkColor="#000"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Button
              onClick={copyToClipboard}
              className="relative cursor-pointer"
              aria-label="Copy my email to clipboard"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </ClickSpark>
        </div>

        <div className="flex items-center gap-4 rounded-full bg-white/50 p-1">
          <ClickSpark
            sparkColor="#000"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Button asChild aria-label="view my cv">
              <a href={cv}>CV</a>
            </Button>
          </ClickSpark>
        </div>

        <nav className="flex items-center gap-4 rounded-full bg-white/50 p-1">
          {navLinks.filter((link) => link.href !== currentPath).map((link, index) => (
            <Button key={`nav_link_item_${index+1}`} asChild variant="ghost" aria-label={link.ariaLabel}>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
      </div>

      <div className="flex space-x-3.5 max-md:hidden">
        {socials?.map((social, index) => (
          <React.Fragment key={index}>
            <motion.a
              href={social.url}
              target="_blank"
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <motion.span
                className="hover:text-secondary/70 block transition-colors duration-200 ease-linear"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {social.platform}
              </motion.span>
            </motion.a>

            {index + 1 !== socials.length && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="md:hidden" />

      <div className="flex items-center gap-6 md:hidden">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            aria-label={`Visit my ${social.platform} profile`}
            className="text-secondary/50 hover:text-secondary/70 transition-colors [&_svg]:stroke-1"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            {social.platform === "Github" && <Github />}
            {social.platform === "LinkedIn" && <Linkedin />}
            {social.platform === "X (Twitter)" && <Twitter />}
          </motion.a>
        ))}
      </div>

      <div className="md:hidden" />
    </header>
  );
}

const socials = [
  {
    platform: "Github",
    url: "https://github.com/kingsonseang",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/solomon-momoh/",
  },
  {
    platform: "X (Twitter)",
    url: "https://twitter.com/kingsonseang",
  },
];
