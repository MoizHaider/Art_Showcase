"use client"
import { useEffect, useState } from 'react';
import useTypeWriter from 'react-typewriter-hook';
function TypeWriter({className, text }) {
  const nameTyped = useTypewriter(data.userData.name || "");
  return nameTyped
}
export default TypeWriter
// Usage in your component
// <Typewriter text="Your text here" />
