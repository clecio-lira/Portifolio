'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function VantaBirds() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).VANTA && vantaRef.current) {
        (window as any).VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          color1: 0xBC8A3C,
          color2: 0xBC8A3C,
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" strategy="afterInteractive" />
      <div ref={vantaRef} className="w-full h-screen" />
    </>
  );
}
