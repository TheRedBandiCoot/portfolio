"use client";
import { NavLink } from "@/components/Navbar";
import Typewriter from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project from "./projects.json";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-y-4">
      {/* xl-1280 lg-1024 md-768 sm-640 */}
      <section className="sm:2/3 flexify min-h-80 w-full flex-col gap-2 rounded-2xl border-2 border-slate-500/40 dark:border-slate-300/40 md:w-5/6 md:flex-row md-lg:gap-12">
        <div className="img-con relative mx-4 ml-8 mt-4 grid h-[160px] w-[160px] place-content-center overflow-hidden rounded-full sm:h-[160px] sm:w-[160px] md:mt-0 md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] xl:h-[280px] xl:w-[280px]">
          <svg
            className="absolute"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="spin2"
              cx="400"
              cy="400"
              fill="none"
              r="400"
              strokeWidth="25"
              stroke="#E387FF"
              strokeDasharray="318 1400"
              strokeLinecap="round"
            />
          </svg>
          <Image
            priority
            className="img rounded-full p-2 md:p-4"
            src={"/profile.png"}
            fill
            alt="profile_img"
          />
        </div>
        <article className="flexify mb-4 mr-4 w-1/2 flex-col gap-y-2 border-l-0 border-slate-500/50 pl-4 dark:border-slate-300/40 md:mb-0 md:border-l-2">
          <div className="text-base text-slate-500 dark:text-slate-400">
            <p>Hello, I&apos;m</p>
          </div>
          <div className="inline-block whitespace-nowrap text-4xl font-bold text-slate-700 dark:text-slate-300">
            <h1 className="username">Gourab Chatterjee</h1>
          </div>
          <div className="h-[28px] text-xl text-slate-500 dark:text-slate-400">
            <Typewriter />
          </div>

          <div className="flexify mt-0 gap-2 sm:mt-2 md-lg:gap-4">
            <Button
              className="scale-95 rounded-full bg-slate-200 dark:bg-slate-700 dark:text-slate-300 hover:dark:bg-slate-800 md-lg:scale-100"
              variant={"outline"}
              asChild
            >
              <a href="/api/download" download>
                Download CV
              </a>
            </Button>
            <Button
              className="scale-95 rounded-full dark:bg-slate-900 dark:text-slate-300 hover:dark:bg-slate-800 md-lg:scale-100"
              asChild
            >
              <NavLink isaddellipsisvertical={true} href={"/contact"}>
                Contact Info
              </NavLink>
            </Button>
          </div>
          <div className="flexify mt-4 gap-2">
            <Button
              className="rounded-full bg-slate-700 p-2 hover:dark:bg-slate-600"
              asChild
            >
              <Link
                href={
                  "https://www.linkedin.com/in/gourab-chatterjee-1953a1147/"
                }
              >
                <Linkedin stroke="white" className="dark:stroke-slate-400" />
              </Link>
            </Button>
            <Button
              className="rounded-full bg-slate-700 p-2 hover:dark:bg-slate-600"
              asChild
            >
              <Link href={"https://github.com/TheRedBandiCoot"}>
                <Github stroke="white" className="dark:stroke-slate-400" />
              </Link>
            </Button>
          </div>
        </article>
      </section>
      <Separator className="sm:2/3 w-full dark:bg-slate-300/40 md:w-5/6" />
      <section className="sm:2/3 flex min-h-32 w-full flex-col items-center justify-start rounded-2xl border-2 border-slate-500/40 dark:border-slate-300/40 md:w-5/6">
        <div className="flex w-full items-center justify-between p-2 pl-4 text-sm text-slate-500 dark:text-slate-300 sm:text-base">
          <p className="whitespace-nowrap">Currently Projects Working on</p>
          <Button
            className="block scale-90 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 hover:dark:bg-slate-800 sm:hidden sm:scale-100"
            variant={"outline"}
            asChild
          >
            <NavLink isaddellipsisvertical={true} href={"/projects"}>
              View All
            </NavLink>
          </Button>
        </div>
        <Separator className="mb-0 ml-0 w-full self-start dark:bg-slate-300/40 sm:mb-3 sm:ml-4 sm:w-[30%]" />
        <div className="flexify mx-4 mb-2 h-14 min-h-20 w-[98%] gap-2 rounded-2xl border-0 border-slate-500/40 dark:border-slate-300/40 sm:border-2">
          {/* project */}
          <div className="md:flexify hidden h-full w-[85%] justify-start overflow-hidden">
            {project.map((p, i) => {
              if (i > 1) return;
              return (
                <React.Fragment key={i}>
                  <Card
                    className={cn(
                      "mx-2 mt-2 h-full overflow-hidden border-none p-0",
                      project.length < 2 ? "w-[100%]" : "w-[50%]",
                    )}
                  >
                    <CardHeader className="mx-2 p-0">
                      <CardTitle className="p-0 text-lg text-slate-700/90 dark:text-slate-300">
                        <Link href={p.projectLink} className="hover:underline">
                          {p.projectName}
                        </Link>
                      </CardTitle>
                      <CardDescription className="!mt-0">
                        <p className="line-clamp text-xs">{p.projectDesc}</p>
                        {/* {p.projectDesc.substring(0, 95)}
                        {p.projectDesc.length > 95 ? "..." : ""} */}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  {i === 1 || project.length < 2 || (
                    <Separator
                      orientation="vertical"
                      className="w-[2px] dark:bg-slate-300/40"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="flexify mx-4 h-full w-full overflow-hidden sm:mx-0 sm:w-[85%] md:hidden">
            <Carousel className="w-[72%] sm:w-[72%]">
              <CarouselContent>
                {project.map((p, i) => {
                  return (
                    <CarouselItem key={i}>
                      <Card
                        className={cn(
                          "h-full w-[100%] overflow-hidden border-none p-0",
                        )}
                      >
                        <CardHeader className="mx-2 p-0">
                          <CardTitle className="p-0 text-sm text-slate-700/90 dark:text-slate-300 md:text-lg">
                            <Link
                              href={p.projectLink}
                              className="hover:underline"
                            >
                              {p.projectName}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp !mt-0 text-xs md:text-lg">
                            {p.projectDesc}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className={"ml-2"} />
              <CarouselNext className={"mr-2"} />
            </Carousel>
          </div>
          <Separator
            orientation="vertical"
            className="hidden w-[2px] dark:bg-slate-300/40 sm:block"
          />
          <div className="sm:flexify mx-4 hidden h-full w-[15%]">
            <Button
              className="mr-2 bg-slate-200 dark:bg-slate-600 dark:text-slate-300"
              variant={"outline"}
              asChild
            >
              <NavLink isaddellipsisvertical={true} href={"/projects"}>
                View All
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
