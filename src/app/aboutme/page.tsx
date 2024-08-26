import Header from '@/components/Header';
import { Award, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className='flex flex-col items-center justify-start h-[40rem] w-full'>
      <Header desc='Get to know me' title='About Me' marginBottom='mb-10' />
      <div className='flexify sm:flex-row flex-col gap-x-12'>
        {/* min-w-[100px] w-full max-w-[300px] */}
        <div className='ml-4 relative overflow-hidden lg:w-[23vw] md:w-[27vw] sm:w-[33vw] w-[27vw] m-4 sm:h-[300px] h-[180px]'>
          <Image
            priority
            src={'/profile.png'}
            width={280}
            height={280}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl'
            alt='profile_img'
          />
        </div>
        <div className='mr-4 lg:w-[60%] sm:w-[70%] w-full flex flex-col items-center gap-y-6 text-center'>
          <div className='w-full flexify gap-x-4'>
            <Card logo={<Award />} p1='Experience' p2='2+ years' p3='Frontend Developer' />
            <Card logo={<Users />} p1='Education' p2='B.Tech Degree' p3='frontend development' />
          </div>
          <div className='lg:w-11/12 w-full'>
            <p className=' text-sm dark:text-slate-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo temporibus consequuntur et totam officia? Enim ullam distinctio
              eligendi, ut tempora praesentium eaque illum eos nulla voluptas laboriosam odio commodi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ logo, p1, p2, p3 }: { logo: React.ReactNode; p1: string; p2: string; p3: string }) {
  return (
    <article className='lg:w-[19vw] sm:w-[23vw] w-[40vw] min-h-[8rem] border-2 border-slate-500/70 dark:border-slate-300/70 rounded-2xl py-4 flex flex-col items-center'>
      <div className='logo mb-2'>{logo}</div>
      <div className='flexify flex-col'>
        <p className='font-bold text-slate-900 dark:text-slate-300'>{p1}</p>
        {/* text-sm */}
        <p className='sm:[font-size:_clamp(0.1em,2vw,0.9em)] [font-size:_clamp(.7em,3vw,1em)]  sm:whitespace-normal whitespace-nowrap text-slate-500 dark:text-slate-400 '>
          {p2}
        </p>
        <p className='sm:[font-size:_clamp(0.1em,2vw,0.9em)] [font-size:_clamp(.7em,3vw,1em)]  sm:whitespace-normal whitespace-nowrap text-slate-500 dark:text-slate-400'>
          {p3}
        </p>
      </div>
    </article>
  );
}
