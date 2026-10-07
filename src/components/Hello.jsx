import './Hello.css';

import { useEffect, useState } from 'react';
import { animate, splitText, stagger } from 'animejs';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Cześć", lang: "Polish" },
  { text: "Olá!", lang: "Brazilian Portuguese" },
  { text: "Hallo", lang: "German" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "こんにちは", lang: "Japanese" },
];

export default function Hello() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let animation;
    
    const rafId = requestAnimationFrame(() => {
      const target = document.querySelector('.greeting');
      if (!target) return;

      const { chars } = splitText(target, {
        chars: { wrap: 'clip' },
      });

    animation = animate(chars, {
        y: [
          { from: '100%', to: '0%', duration: 750, ease: 'out(3)' },
          { to: '-100%', delay: 3500, duration: 750, ease: 'in(3)' }
        ],
        delay: stagger(50, { from: 'first' }),
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (animation) animation.pause();
    };
  }, [currentIndex]);    

  const current = greetings[currentIndex];

  return (
      <span className="greeting">
          {current.text}
      </span>
  );
}
