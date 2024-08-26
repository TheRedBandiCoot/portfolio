'use client';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image as Img } from 'lucide-react';
import Image from 'next/image';
import data from './data.json';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const constructData = (chuckSize: number = 3) => {
  const arr = [];
  // const chuckSize = 3;
  for (let i = 0; i < data.length; i += chuckSize) {
    arr.push(data.slice(i, i + chuckSize));
  }
  return arr;
};
export default function ProjectPage() {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);
  return (
    <section className='flex flex-col items-center justify-start min-h-[40rem] h-auto w-full'>
      <Header desc='Browse My Recent' title='Projects' marginBottom='mb-10' />
      <Carousel
        className='sm-md:w-full w-[78%] lg:mt-20 mt-10 mx-4'
        orientation={windowSize[0] < 520 ? 'horizontal' : 'vertical'}
        opts={{ align: 'start' }}
      >
        <CarouselContent className='h-[22rem] '>
          {constructData(windowSize[0] < 1010 ? (windowSize[0] < 520 ? 1 : 2) : 3).map((p, i) => (
            <CarouselItem key={i} className='flexify'>
              <div className='grid lg-xl:grid-cols-3 sm-md:grid-cols-2 grid-cols-1 place-items-center w-full'>
                {p.map((k, i) => (
                  <Card key={i} title={k.projectName} windowSize={windowSize} />
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

function Card({ imgSrc, title, windowSize }: { imgSrc?: string; title?: string; windowSize: number[] }) {
  return (
    // windowSize[0] <= 1024 ? 'h-[19rem]' : 'h-[20rem] h-[22vw]'
    <div
      className={cn(
        'xl:w-[23vw] lg-xl:w-[25vw] md:w-[35vw] sm:w-[38vw] sm-md:w-[45vw] w-[70vw] h-[20rem] p-4 pb-0 border-2 border-slate-500/40 dark:border-slate-300/40 rounded-2xl shadow-lg flex flex-col items-center'
      )}
    >
      {/* h-40 */}
      <div className={'w-full h-40 border-2 border-slate-500/40 dark:border-slate-300/40 rounded-xl overflow-hidden flexify'}>
        {imgSrc ? <Image src={imgSrc || ''} width={150} height={150} alt='project_img' /> : <Img size={40} />}
      </div>
      <article className='self-start mt-2'>
        <h1 className='font-bold text-slate-900 dark:text-slate-300 sm-md:[font-size:_clamp(1em,2vw,1.5em)] text-xl'>{title}</h1>
        <div className='text-slate-500 dark:text-slate-400/60 sm-md:[font-size:_clamp(0.7em,1vw,0.8em)] text-sm line-clamp'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, maiores?
        </div>
      </article>
      {/* lg:ml-4  */}
      <div className='self-start flex  xl:gap-x-4 sm-md:gap-x-0 gap-x-2 lg:my-4 my-2'>
        <Button
          variant={'outline'}
          size={windowSize[0] <= 1024 ? 'sm' : 'default'}
          className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 xl:scale-100 md:scale-90 md:ml-0 -ml-2 sm:scale-[.85] sm-md:scale-[.80] scale-90'
        >
          Github
        </Button>
        <Button
          variant={'outline'}
          size={windowSize[0] <= 1024 ? 'sm' : 'default'}
          className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 xl:scale-100 md:scale-90 md:ml-0 -ml-2 sm:scale-[.85] sm-md:scale-[.80] scale-90'
        >
          Live Demo
        </Button>
      </div>
    </div>
  );
}
