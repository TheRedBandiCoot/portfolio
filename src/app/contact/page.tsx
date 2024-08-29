"use client";
import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [isOpen]);

  const handleChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <section className="flex h-auto min-h-[40rem] w-full flex-col items-center justify-start px-4">
      <Header desc="Get In Touch" title="Contact Me" marginBottom="mb-20" />
      <Card className="flex h-[6.5rem] w-[95vw] items-start justify-between shadow-lg dark:border-slate-500 sm-md:w-[85vw] sm:w-[70vw] md-lg:h-[7.5rem] md-lg:w-[60vw] lg:h-[8rem] lg:w-[50vw]">
        <div className="">
          <div className="mb-0 ml-4 mt-2 flex !items-center md-lg:mb-3">
            <Avatar className="size-11 sm-md:size-12 md-lg:size-14 lg:size-16">
              <AvatarImage src={"https://github.com/theredbandicoot.png"} />
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>
            <CardHeader className="pb-4 pl-4 pt-2">
              <CardTitle className="whitespace-nowrap font-bold text-slate-800 [font-size:_clamp(0.95em,2vw,1.5em)] dark:text-slate-300">
                Gourab Chatterjee
              </CardTitle>
              <CardDescription className="!mt-0 text-slate-500 [font-size:_clamp(0.65em,1.5vw,0.9em)] dark:text-slate-400">
                Full Stack Developer
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="relative pb-4 text-sm text-slate-600 dark:text-slate-400">
            <h1 className="absolute whitespace-nowrap">
              <span className="[font-size:_clamp(0.7em,1.2vw,1em)]">
                Looking to hire me? Email me @{" "}
              </span>
              <span className="cursor-pointer font-bold text-slate-800 [font-size:_clamp(0.7em,1.2vw,1em)] dark:text-slate-300">
                <TooltipProvider>
                  <Tooltip
                    open={isOpen ? false : isToolTipOpen}
                    onOpenChange={setIsToolTipOpen}
                  >
                    <TooltipTrigger>
                      <Popover open={isOpen} onOpenChange={handleChange}>
                        <PopoverTrigger
                          asChild
                          className="outline-none hover:underline"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "gourabchatterjee623@gmail.com",
                            );
                            setIsOpen(true);
                          }}
                        >
                          <span
                            onMouseEnter={() => setIsToolTipOpen(true)}
                            onMouseLeave={() => setIsToolTipOpen(false)}
                          >
                            gourabchatterjee623@gmail.com
                          </span>
                        </PopoverTrigger>
                        <PopoverContent
                          side="top"
                          className="absolute -bottom-0 left-1/2 -ml-[25px] w-max px-2 py-1 md:px-4 lg:bottom-0 lg:-ml-[50px]"
                        >
                          <p className="[font-size:_clamp(0.7em,1.2vw,1em)]">
                            Copied
                          </p>
                        </PopoverContent>
                      </Popover>
                    </TooltipTrigger>
                    <TooltipContent className="absolute -bottom-1 left-1/2 -ml-[50px] hidden px-2 py-1 sm:block md:px-4 lg:bottom-0 lg:-ml-[70px]">
                      <p className="[font-size:_clamp(0.7em,1.2vw,1em)]">
                        Click To Copy
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* {!isCopied && (
                  <span className="absolute right-24 -translate-y-10 rounded-md border-[1px] px-4 py-1 font-extrabold text-green-500 shadow-lg [font-size:_clamp(0.7em,1.2vw,1em)] dark:border-slate-500 dark:bg-transparent">
                    Copied
                  </span>
                )} */}
              </span>
            </h1>
          </CardContent>
        </div>
        <CardFooter className="flex gap-2 pt-4">
          <Link
            href={"https://www.linkedin.com/in/gourab-chatterjee-1953a1147/"}
          >
            <Linkedin className="scale-75 dark:stroke-slate-400 sm:scale-90 md-lg:scale-95 lg:scale-100" />
          </Link>
          <Link href={"https://github.com/TheRedBandiCoot"}>
            <Github className="scale-75 dark:stroke-slate-400 sm:scale-90 md-lg:scale-95 lg:scale-100" />
          </Link>

          <Link href={"https://x.com/subho19996"}>
            <Twitter className="scale-75 dark:stroke-slate-400 sm:scale-90 md-lg:scale-95 lg:scale-100" />
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
