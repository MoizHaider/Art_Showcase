"use client"
import { useEffect, useState } from 'react';
import useTypeWriter from 'react-typewriter-hook';
function TypeWriter({className }) {
  const nameTyped = useTypewriter("Hello world");
}
export default TypeWriter
// Usage in your component
// <Typewriter text="Your text here" />
