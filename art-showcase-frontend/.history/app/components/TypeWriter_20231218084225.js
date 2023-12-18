"use client"
import { useEffect, useState } from 'react';
import 
function TypeWriter({className }) {
  const [displayedText, setDisplayedText] = useState('');
  
  
  const text = "Hello world"
  

  useEffect(() => {
    if (!text) {
      return; // Add a check to ensure the text is defined
    }

    let currentIndex = 0;
    const interval = 150; // Adjust the typing speed here (in milliseconds)

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

  return <span className={className}>{displayedText}</span>;
}
export default TypeWriter
// Usage in your component
// <Typewriter text="Your text here" />
