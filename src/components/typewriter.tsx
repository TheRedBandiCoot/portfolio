'use client';

import { useEffect, useState } from 'react';

export default function Typewriter() {
  const texts = ['Fullstack Developer', 'Web Developer', 'Designer', 'Freelancer'];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const fullText = texts[textIndex];
    let typingSpeed = deleting ? 50 : 100;

    if (!deleting && index === fullText.length) {
      setIsPaused(true);
      typingSpeed = 1500;
      setTimeout(() => {
        setDeleting(true);
        setIsPaused(false);
      }, typingSpeed);
      return;
    } else if (deleting && index === 0) {
      setIsPaused(true);
      typingSpeed = 500;
      setTimeout(() => {
        setDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
        setIsPaused(false);
      }, typingSpeed);
      return;
    }
    const timeoutId = setTimeout(() => {
      setCurrentText(fullText.substring(0, deleting ? index - 1 : index + 1));
      setIndex(prev => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [index, deleting, textIndex, isPaused]);

  return (
    <div className='typewriter'>
      <h1 className={'sm:text-xl text-base'}>{currentText}</h1>
    </div>
  );
}
