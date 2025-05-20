import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const email = import.meta.env.PUBLIC_EMAIL || "your.email@example.com";
  const cv = import.meta.env.PUBLIC_CV || "your.email@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <header className='flex items-center justify-between text-stone-500'>
      <div className='flex items-center gap-4'>
        <div className='bg-white/50 p-1 flex items-center gap-4 rounded-full'>
          <span className='pl-5 text-sm'>{email}</span>

          <Button variant='secondary' size='sm' onClick={copyToClipboard}>
            Copy
          </Button>
        </div>

        <div className='bg-white/50 p-1 flex items-center gap-4 rounded-full'>
          <Button variant='secondary' size='sm' asChild>
            <a href={cv}>CV</a>
          </Button>
        </div>
      </div>

      <div className='flex space-x-3.5'>
        {socials?.map((social, index) => (
          <React.Fragment key={index}>
            <a
              href={social.url}
              target='_blank'
              className='hover:text-stone-700'
            >
              {social.platform}
            </a>

            {index + 1 !== socials.length && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
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
