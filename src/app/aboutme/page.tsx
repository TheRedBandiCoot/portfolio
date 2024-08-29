import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Award, Users } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex h-[40rem] w-full flex-col items-center justify-start">
      <Header desc="Get to know me" title="About Me" marginBottom="mb-10" />
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
        <div className="mr-4 flex w-full flex-col items-center gap-y-6 text-center sm:w-[70%] lg:w-[60%]">
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
          <div className="w-full lg:w-11/12">
            <p className="text-sm dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo
              temporibus consequuntur et totam officia? Enim ullam distinctio
              eligendi,{" "}
              {/* <Badge style={{ backgroundColor: `rgb(60,210,124)` }}> */}
              <Badge>#javascript</Badge> <Badge>#css</Badge>{" "}
              <Badge>#react</Badge> tempora praesentium eaque illum eos nulla
              voluptas laboriosam odio commodi.
            </p>
          </div>
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
