"use client";

import { useState, useEffect } from "react";

export function OverlayScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!isScrolling) return null;

  return (
    <div
      className="fixed right-1 top-0 w-[3px] h-full z-[9999] pointer-events-none transition-opacity duration-500"
      style={{ opacity: isScrolling ? 1 : 0 }}
    >
      <div
        className="w-full rounded-full bg-gray-400/40 backdrop-blur-sm transition-all duration-150"
        style={{
          height: `${Math.max(20, 100 - scrollProgress)}%`,
          transform: `translateY(${scrollProgress}%)`,
        }}
      />
    </div>
  );
}
