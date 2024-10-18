"use client";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Award, CircleCheck, CirclePlus, CircleX, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const isAdmin = true;
export default function AboutMe() {
  const [v, sv] = React.useState<string>("");
  const [isConfirm, setIsConfirm] = React.useState<boolean>(true);
  const [showEditBtn, setShowEditBtn] = React.useState<boolean>(false);
  const [windowSize, setWindowSize] = React.useState<number[] | null>(null);

  const parseInput = (value: string) => {
    const regex = /\*(.*?)\*/g;
    const parts = value.split(regex);

    return parts.map((part, idx) => {
      if (idx % 2 === 1) {
        return <Badge key={idx}>{part}</Badge>;
      }
      return part;
    });
  };

  const confirmTextBtn = () => {
    setIsConfirm(true);
  };
  const cancelBtn = () => {
    setIsConfirm(true);
  };

  React.useEffect(() => {
    sv(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo temporibus consequuntur et totam officia? Enim ullam distinctio eligendi, *#javascript* *#css* *#react* tempora praesentium eaque illum eos nulla voluptas laboriosam odio commodi.",
    );
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    windowSizeHandler(); // Set the initial size on the client side
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  if (!windowSize) return null;

  return (
    <section className="flex h-[40rem] w-full flex-col items-center justify-start">
      <Header desc="Get to know me" title="About Me" marginBottom="mb-10" />
      {/* {!isAdmin && "@@@@@@@@@@@@@@@@@ Change isAdmin @@@@@@@@@@@@@@@@@"} */}
      <div className="flexify flex-col gap-x-12 sm:flex-row">
        {/* min-w-[100px] w-full max-w-[300px] */}
        <div className="relative m-4 ml-4 h-[180px] w-[27vw] overflow-hidden sm:h-[300px] sm:w-[33vw] md:w-[27vw] lg:w-[23vw]">
          <Image
            priority
            src={"/profile.png"}
            width={280}
            height={280}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            alt="profile_img"
          />
        </div>
        <div className="mr-0 flex w-full flex-col items-center gap-y-6 text-center sm:mr-4 sm:w-[70%] lg:w-[60%]">
          <div className="flexify w-full gap-x-4">
            <Card
              logo={<Award />}
              p1="Experience"
              p2="2+ years"
              p3="Frontend Developer"
            />
            <Card
              logo={<Users />}
              p1="Education"
              p2="B.Tech Degree"
              p3="frontend development"
            />
          </div>
          {/* <div className="w-full lg:w-11/12">
            <p className="text-sm dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
              temporibus consequuntur et totam officia? Enim ullam distinctio
              eligendi,
              <Badge style={{ backgroundColor: `rgb(60,210,124)` }}>
              <Badge>#javascript</Badge> <Badge>#css</Badge>{" "}
              <Badge>#react</Badge> tempora praesentium eaque illum eos nulla
              voluptas laboriosam odio commodi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
              temporibus consequuntur et totam officia? Enim ullam distinctio
              eligendi, *#javascript* *#css* *#react* tempora praesentium eaque illum eos nulla
              voluptas laboriosam odio commodi.
            </p>
          </div> */}
          {/* Experimental */}
          <div
            className={cn(
              isConfirm
                ? "w-full lg:w-11/12"
                : "flex min-h-32 w-full items-start justify-between rounded-md border-2 border-slate-500/70 px-4 py-2 pr-2 dark:border-slate-300/70 lg:w-11/12",
              isAdmin &&
                "rounded-md border-2 border-slate-500/70 px-6 py-2 dark:border-slate-300/70 sm:px-4",
              windowSize[0] < 425 && !isConfirm && isAdmin && "px-0 pl-2",
            )}
          >
            {!isConfirm && (
              // Text Area - edit
              <div
                className={cn(
                  "mr-2 h-32",
                  windowSize[0] > 425
                    ? "w-1/2 border-r-2 border-slate-500/70 pr-1 dark:border-slate-300/70"
                    : "w-full border-r-0",
                )}
              >
                <textarea
                  className="scrollbar h-full w-full resize-none bg-inherit text-sm outline-none dark:text-slate-200"
                  value={v}
                  onChange={(e) => sv(e.target.value)}
                  placeholder="Type Something..."
                />
              </div>
            )}
            {/* Preview  */}
            {((isConfirm && windowSize[0] < 425) || windowSize[0] > 425) && (
              <div
                className={cn(
                  isConfirm
                    ? "relative"
                    : "scrollbar flex h-32 w-1/2 items-start justify-start overflow-y-scroll",
                )}
              >
                <p
                  className={cn(
                    isConfirm
                      ? "text-sm dark:text-slate-400"
                      : "whitespace-pre-line text-left text-sm dark:text-slate-400",
                    showEditBtn && windowSize[0] > 768 ? "blur-[0.8px]" : "",
                  )}
                  onMouseEnter={() =>
                    setShowEditBtn(
                      isConfirm && isAdmin
                        ? windowSize[0] > 768
                          ? true
                          : false
                        : false,
                    )
                  }
                  onMouseLeave={() => setShowEditBtn(false)}
                >
                  {parseInput(v)}
                </p>
                {(showEditBtn || (windowSize[0] <= 768 && isConfirm)) && (
                  <Button
                    size={windowSize[0] > 768 ? "default" : "sm"}
                    onClick={() => setIsConfirm(false)}
                    variant={"outline"}
                    style={isAdmin ? {} : { display: "none" }}
                    className={cn(
                      windowSize[0] > 768
                        ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 shadow-md shadow-emerald-900 hover:opacity-100 hover:dark:bg-slate-950"
                        : "absolute -left-9 -top-6 rounded-full p-[5px]",
                    )}
                    onMouseEnter={() => setShowEditBtn(true)}
                    onMouseLeave={() => setShowEditBtn(false)}
                  >
                    <CirclePlus />
                  </Button>
                )}
              </div>
            )}
          </div>
          {isConfirm ? (
            <></>
          ) : (
            <div className="flex -translate-y-5 gap-x-4">
              <Button
                size={windowSize[0] > 768 ? "default" : "sm"}
                className="bg-red-700 hover:bg-red-600"
                onClick={cancelBtn}
              >
                <CircleX />
              </Button>
              <Button
                size={windowSize[0] > 768 ? "default" : "sm"}
                className="bg-green-700 hover:bg-green-600"
                onClick={confirmTextBtn}
              >
                <CircleCheck />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Card({
  logo,
  p1,
  p2,
  p3,
}: {
  logo: React.ReactNode;
  p1: string;
  p2: string;
  p3: string;
}) {
  return (
    <article className="flex min-h-[8rem] w-[40vw] flex-col items-center rounded-2xl border-2 border-slate-500/70 py-4 dark:border-slate-300/70 sm:w-[23vw] lg:w-[19vw]">
      <div className="logo mb-2">{logo}</div>
      <div className="flexify flex-col">
        <p className="font-bold text-slate-900 dark:text-slate-300">{p1}</p>
        {/* text-sm */}
        <p className="whitespace-nowrap text-slate-500 [font-size:_clamp(.7em,3vw,1em)] dark:text-slate-400 sm:whitespace-normal sm:[font-size:_clamp(0.1em,2vw,0.9em)]">
          {p2}
        </p>
        <p className="whitespace-nowrap text-slate-500 [font-size:_clamp(.7em,3vw,1em)] dark:text-slate-400 sm:whitespace-normal sm:[font-size:_clamp(0.1em,2vw,0.9em)]">
          {p3}
        </p>
      </div>
    </article>
  );
}
