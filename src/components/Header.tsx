import { cn } from '@/lib/utils';

export default function Header({ desc, title, marginBottom = 'mb-20' }: { desc: string; title: string; marginBottom?: string }) {
  return (
    <div className={cn('text-center', marginBottom)}>
      <p className='text-base text-slate-500 dark:text-slate-400'>{desc}</p>
      <h1 className='text-5xl font-bold text-slate-700 dark:text-slate-300'>{title}</h1>
    </div>
  );
}
