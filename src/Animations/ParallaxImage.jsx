"use client";
import React, { useRef, useEffect, useState } from "react";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt, speed = 0.45, className }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const onScroll = () => {
      if (!bounds.current) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const elementMiddle = bounds.current.top + bounds.current.height / 2;
      const windowMiddle = scrollY + windowHeight / 2;
      const distanceFromCenter = windowMiddle - elementMiddle;

      targetTranslateY.current = distanceFromCenter * speed;
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // call once to initialize

    const animate = () => {
      if (imageRef.current && bounds.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.3)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop, speed]);

  return (
    <img
      className={className}
      ref={imageRef}
      src={src}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0)",
      }}
    />
  );
};

export default ParallaxImage;
