import { useEffect, useState } from 'react';

function Typewriter({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = 100; // Adjust the typing speed here (in milliseconds)

    const typewriterInterval = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex));
      currentIndex += 1;

      if (currentIndex > text.length) {
        clearInterval(typewriterInterval);
      }
    }, interval);

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [text]);

  return <span>{displayedText}</span>;
}

// Usage in your component
// <Typewriter text="Your text here" />
