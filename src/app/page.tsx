'use client';
import { NavLink } from '@/components/Navbar';
import Typewriter from '@/components/typewriter';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project from './projects.json';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center w-full gap-y-4'>
      {/* xl-1280 lg-1024 md-768 sm-640 */}
      <section className='w-full sm:2/3 md:w-5/6 min-h-80 border-2 border-slate-500/40 dark:border-slate-300/40 rounded-2xl flexify gap-2 md-lg:gap-12 flex-col md:flex-row'>
        <div className='img-con mx-4 md:mt-0 mt-4 sm:w-[160px] sm:h-[160px] xl:w-[280px] xl:h-[280px] lg:w-[240px] lg:h-[240px] md:w-[200px] md:h-[200px] w-[160px] h-[160px] ml-8 grid place-content-center rounded-full overflow-hidden relative '>
          <svg className='absolute' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'>
            <circle
              className='spin2'
              cx='400'
              cy='400'
              fill='none'
              r='400'
              strokeWidth='25'
              stroke='#E387FF'
              strokeDasharray='318 1400'
              strokeLinecap='round'
            />
          </svg>
          <Image priority className='img rounded-full md:p-4 p-2' src={'/profile.png'} fill alt='profile_img' />
        </div>
        <article className='md:mb-0 mb-4 pl-4 mr-4 w-1/2 flexify flex-col gap-y-2 md:border-l-2 border-l-0 border-slate-500/50  dark:border-slate-300/40'>
          <div className='text-base text-slate-500 dark:text-slate-400'>
            <p>Hello, I'm</p>
          </div>
          <div className='text-4xl font-bold text-slate-700 dark:text-slate-300 inline-block whitespace-nowrap'>
            <h1 className='username'>Gourab Chatterjee</h1>
          </div>
          <div className='text-xl h-[28px] text-slate-500 dark:text-slate-400'>
            <Typewriter />
          </div>

          <div className='flexify gap-2 md-lg:gap-4  sm:mt-2 mt-0'>
            <Button className='rounded-full bg-slate-200 dark:bg-slate-700 dark:text-slate-300 scale-95 md-lg:scale-100' variant={'outline'} asChild>
              <a href='/api/download' download>
                Download CV
              </a>
            </Button>
            <Button className='rounded-full dark:bg-slate-900 dark:text-slate-300 scale-95 md-lg:scale-100' asChild>
              <NavLink isaddellipsisvertical={true} href={'/contact'}>
                Contact Info
              </NavLink>
            </Button>
          </div>
          <div className='flexify gap-2 mt-4'>
            <Button className='bg-slate-700 rounded-full p-2' asChild>
              <Link href={'https://www.linkedin.com/in/gourab-chatterjee-1953a1147/'}>
                <Linkedin stroke='white' className='dark:stroke-slate-400' />
              </Link>
            </Button>
            <Button className='bg-slate-700 rounded-full p-2' asChild>
              <Link href={'https://github.com/TheRedBandiCoot'}>
                <Github stroke='white' className='dark:stroke-slate-400' />
              </Link>
            </Button>
          </div>
        </article>
      </section>
      <Separator className='w-full sm:2/3 md:w-5/6 dark:bg-slate-300/40' />
      <section className='w-full sm:2/3 md:w-5/6 min-h-32 border-2 border-slate-500/40 dark:border-slate-300/40 rounded-2xl flex flex-col justify-start items-center'>
        <div className='w-full sm:text-base text-sm p-2 pl-4 text-slate-500 dark:text-slate-300 flex items-center justify-between'>
          <p className='whitespace-nowrap'>Currently Projects Working on</p>
          <Button className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 sm:hidden block sm:scale-100 scale-90' variant={'outline'} asChild>
            <NavLink isaddellipsisvertical={true} href={'/projects'}>
              View All
            </NavLink>
          </Button>
        </div>
        <Separator className='sm:mb-3 mb-0 w-full sm:w-[30%] sm:ml-4 ml-0 self-start dark:bg-slate-300/40' />
        <div className='w-[98%] h-14 mx-4 mb-2 min-h-20 border-0 sm:border-2 border-slate-500/40 dark:border-slate-300/40 rounded-2xl flexify gap-2'>
          {/* project */}
          <div className='md:flexify hidden w-[85%] h-full overflow-hidden justify-start'>
            {project.map((p, i) => {
              if (i > 1) return;
              return (
                <React.Fragment key={i}>
                  <Card className={cn('p-0 mx-2 mt-2 h-full border-none overflow-hidden', project.length < 2 ? 'w-[100%]' : 'w-[50%]')}>
                    <CardHeader className='p-0 mx-2'>
                      <CardTitle className='p-0 text-slate-700/90 dark:text-slate-300 text-lg'>
                        <Link href={p.projectLink} className='hover:underline'>
                          {p.projectName}
                        </Link>
                      </CardTitle>
                      <CardDescription className='!mt-0'>
                        {p.projectDesc.substring(0, 95)}
                        {p.projectDesc.length > 95 ? '...' : ''}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  {i === 1 || project.length < 2 || <Separator orientation='vertical' className='w-[2px] dark:bg-slate-300/40' />}
                </React.Fragment>
              );
            })}
          </div>
          <div className='md:hidden sm:w-[85%] w-full h-full flexify overflow-hidden sm:mx-0 mx-4'>
            <Carousel className='sm:w-[72%] w-[72%]'>
              <CarouselContent>
                {project.map((p, i) => {
                  return (
                    <CarouselItem key={i}>
                      <Card className={cn('p-0  h-full border-none overflow-hidden w-[100%]')}>
                        <CardHeader className='p-0 mx-2'>
                          <CardTitle className='p-0 text-slate-700/90 dark:text-slate-300 text-sm md:text-lg'>
                            <Link href={p.projectLink} className='hover:underline'>
                              {p.projectName}
                            </Link>
                          </CardTitle>
                          <CardDescription className='!mt-0 line-clamp text-xs md:text-lg'>{p.projectDesc}</CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className={'ml-2'} />
              <CarouselNext className={'mr-2'} />
            </Carousel>
          </div>
          <Separator orientation='vertical' className='w-[2px] dark:bg-slate-300/40 sm:block hidden' />
          <div className='w-[15%] h-full sm:flexify hidden mx-4'>
            <Button className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 mr-2' variant={'outline'} asChild>
              <NavLink isaddellipsisvertical={true} href={'/projects'}>
                View All
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
