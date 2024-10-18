"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Edit, Image as Img } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "./data.json";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const isAdmin = true;

const constructData = (chuckSize: number = 3) => {
  const arr = [];
  // const chuckSize = 3;
  for (let i = 0; i < data.length; i += chuckSize) {
    arr.push(data.slice(i, i + chuckSize));
  }
  return arr;
};
// export default function ProjectPage() {
//   const [windowSize, setWindowSize] = useState<number[]>([
//     window.innerWidth,
//     window.innerHeight,
//   ]);

//   useEffect(() => {
//     const windowSizeHandler = () => {
//       setWindowSize([window.innerWidth, window.innerHeight]);
//     };
//     windowSizeHandler();
//     window.addEventListener("resize", windowSizeHandler);

//     return () => {
//       window.removeEventListener("resize", windowSizeHandler);
//     };
//   }, []);

//   const orientation = windowSize[0] < 520 ? "horizontal" : "vertical";

//   return (
//     <section className="flex h-auto min-h-[40rem] w-full flex-col items-center justify-start">
//       <Header desc="Browse My Recent" title="Projects" marginBottom="mb-10" />
//       <Carousel
//         className="mx-4 mt-10 w-[78%] sm-md:w-full lg:mt-20"
//         orientation={orientation}
//         opts={{ align: "start" }}
//       >
//         <CarouselContent className="h-[22rem]">
//           {constructData(
//             windowSize[0] < 1010 ? (windowSize[0] < 520 ? 1 : 2) : 3,
//           ).map((p, i) => (
//             <CarouselItem key={i} className="flexify">
//               <div className="grid w-full grid-cols-1 place-items-center sm-md:grid-cols-2 lg-xl:grid-cols-3">
//                 {p.map((k, i) => (
//                   <CardBox key={i} title={k.projectName} windowSize={windowSize} />
//                 ))}
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </section>
//   );
// }
export default function ProjectPage() {
  const [windowSize, setWindowSize] = useState<number[] | null>(null);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    windowSizeHandler(); // Set the initial size on the client side
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  const LoadingSpinner = () => (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-gray-900"></div>
    </div>
  );

  if (!windowSize) return <LoadingSpinner />;

  const orientation = windowSize[0] < 520 ? "horizontal" : "vertical";

  return (
    <section className="flex h-auto min-h-[40rem] w-full flex-col items-center justify-start">
      <Header desc="Browse My Recent" title="Projects" marginBottom="mb-10" />
      <Carousel
        className="mx-4 mt-10 w-[78%] sm-md:w-full lg:mt-20"
        orientation={orientation}
        opts={{ align: "start" }}
        plugins={[WheelGesturesPlugin()]}
      >
        <CarouselContent className="h-[22rem]">
          {constructData(
            windowSize[0] < 1010 ? (windowSize[0] < 520 ? 1 : 2) : 3,
          ).map((p, i) => (
            <CarouselItem key={i} className="flexify">
              <div className="grid w-full grid-cols-1 place-items-center sm-md:grid-cols-2 lg-xl:grid-cols-3">
                {p.map((k, i) => (
                  <CardBox
                    key={i}
                    title={k.projectName}
                    desc={k.projectDesc}
                    windowSize={windowSize}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

function CardBox({
  imgSrc,
  title,
  windowSize,
  desc,
}: {
  imgSrc?: string;
  title?: string;
  desc?: string;
  windowSize: number[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    // windowSize[0] <= 1024 ? 'h-[19rem]' : 'h-[20rem] h-[22vw]'
    <div
      className={cn(
        "flex h-[20rem] w-[70vw] flex-col items-center rounded-2xl border-2 border-slate-500/40 p-4 pb-0 shadow-lg dark:border-slate-300/40 sm-md:w-[45vw] sm:w-[38vw] md:w-[35vw] lg-xl:w-[25vw] xl:w-[23vw]",
      )}
    >
      {/* h-40 */}
      <div
        className={
          "flexify h-40 w-full overflow-hidden rounded-xl border-2 border-slate-500/40 dark:border-slate-300/40"
        }
      >
        {imgSrc ? (
          <Image
            src={imgSrc || ""}
            width={150}
            height={150}
            alt="project_img"
          />
        ) : (
          <Img size={40} />
        )}
      </div>
      <article className="mt-2 self-start">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-300 sm-md:[font-size:_clamp(1em,2vw,1.5em)]">
          {title}
        </h1>
        <div className="line-clamp h-10 text-sm text-slate-500 dark:text-slate-400/60 sm-md:[font-size:_clamp(0.7em,1vw,0.8em)]">
          {desc}
        </div>
      </article>
      {/* lg:ml-4  */}
      {/* <div className="flex w-full items-center self-start border-[1px] border-red-600"> */}
      <div className="flex w-full items-center self-start">
        <div className="my-2 flex flex-1 gap-x-2 sm-md:gap-x-0 lg:my-4 xl:gap-x-4">
          <Button
            variant={"outline"}
            size={windowSize[0] <= 1024 ? "sm" : "default"}
            className="-ml-2 scale-90 bg-slate-200 transition-all duration-300 dark:bg-slate-700 dark:text-slate-300 hover:dark:bg-slate-600 sm-md:scale-[.80] sm:scale-[.85] md:ml-0 md:scale-90 xl:scale-100"
          >
            Github
          </Button>
          <Button
            variant={"outline"}
            size={windowSize[0] <= 1024 ? "sm" : "default"}
            className="-ml-2 scale-90 bg-slate-200 transition-all duration-300 dark:bg-slate-700 dark:text-slate-300 hover:dark:bg-slate-600 sm-md:scale-[.80] sm:scale-[.85] md:ml-0 md:scale-90 xl:scale-100"
          >
            Live Demo
          </Button>
        </div>

        {isDesktop ? (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-transparent p-2 hover:bg-transparent">
                <Edit className="text-white transition-all duration-300 hover:text-slate-400" />
              </Button>
            </DialogTrigger>

            <DialogContent
              className="sm:max-w-[425px]"
              onCloseAutoFocus={() => console.log("close")}
            >
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button className="bg-transparent p-2 hover:bg-transparent">
                <Edit className="text-white transition-all duration-300 hover:text-slate-400" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-h-[90%]">
              {/* Header */}
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              {/* Main */}
              <div className="px-8"></div>
              {/* Footer */}
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </div>
  );
}
