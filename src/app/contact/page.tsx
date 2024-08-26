'use client';
import Header from '@/components/Header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <section className='flex flex-col items-center justify-start min-h-[40rem] h-auto w-full px-4 border-[1px] border-red-500'>
      <Header desc='Get In Touch' title='Contact Me' marginBottom='mb-20' />
      <Card className='w-[44vw] h-[8rem] flex justify-between items-start shadow-lg dark:border-slate-500 '>
        <div className=''>
          <div className='flex !items-center ml-4 mt-2 mb-3'>
            <Avatar className='size-16'>
              <AvatarImage src={'https://github.com/theredbandicoot.png'} />
              <AvatarFallback>GC</AvatarFallback>
            </Avatar>
            <CardHeader className='pl-4 pb-4 pt-2'>
              <CardTitle className='[font-size:_clamp(1em,2vw,1.5em)] whitespace-nowrap font-bold text-slate-800 dark:text-slate-300'>
                Gourab Chatterjee
              </CardTitle>
              <CardDescription className='text-slate-500 dark:text-slate-400 !mt-0'>Full Stack Developer</CardDescription>
            </CardHeader>
          </div>
          <CardContent className='text-slate-600 dark:text-slate-400 text-sm pb-4 relative'>
            <h1 className='whitespace-nowrap absolute'>
              <span className='[font-size:_clamp(0.7em,1.2vw,1em)]'>Looking to hire me? Email me @ </span>
              <span className='[font-size:_clamp(0.7em,1.2vw,1em)] text-slate-800 dark:text-slate-300 font-bold  cursor-pointer'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      onClick={() => {
                        setIsCopied(true);
                        navigator.clipboard.writeText('gourabchatterjee623@gmail.com');
                        setTimeout(() => {
                          setIsCopied(false);
                        }, 1000);
                      }}
                      className='hover:underline outline-none'
                    >
                      gourabchatterjee623@gmail.com
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click To Copy</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
              {isCopied && (
                <span className='absolute -translate-y-10 rounded-md right-24 text-green-500 dark:bg-transparent border-[1px] dark:border-slate-500 px-4 py-1 font-extrabold text-base shadow-lg'>
                  Copied
                </span>
              )}
            </h1>
          </CardContent>
        </div>
        <CardFooter className='self-center flex gap-2'>
          <Link href={'https://www.linkedin.com/in/gourab-chatterjee-1953a1147/'}>
            <Linkedin className='dark:stroke-slate-400' />
          </Link>
          <Link href={'https://github.com/TheRedBandiCoot'}>
            <Github className='dark:stroke-slate-400' />
          </Link>

          <Link href={'https://x.com/subho19996'}>
            <Twitter className='dark:stroke-slate-400' />
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
