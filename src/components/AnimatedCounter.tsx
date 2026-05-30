"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number; // duration in ms
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalFrames = Math.min(Math.floor(duration / 16.67), 100); // approx 60fps, cap at 100 steps
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      // Easing out quadratic
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, 16.67);

    return () => clearInterval(counterInterval);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={elementRef} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}
