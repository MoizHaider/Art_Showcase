"use client"
import { useEffect, useState } from 'react';

function TypeWriter({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) {
      return; // Add a check to ensure the text is defined
    }

    let currentIndex = 0;
    const interval = 100; // Adjust the typing speed here (in milliseconds)

    const typewriterInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextChar = text[currentIndex];
        currentIndex += 1;
        return prevText + (nextChar ? nextChar : ''); // Check if nextChar is defined
      });

      if (currentIndex >= text.length) {
        clearInterval(typewriterInterval);
      }
    }, interval);

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [text]);

  return <span >{displayedText}</span>;
}
export default TypeWriter
// Usage in your component
// <Typewriter text="Your text here" />
