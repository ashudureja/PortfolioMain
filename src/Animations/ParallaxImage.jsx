"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

const lerp = (start, end, factor) => start + (end - start) * factor;

// Throttle function to limit scroll event frequency
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const ParallaxImage = ({ src, alt, speed = 0.45, className }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const isAnimating = useRef(false);
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

    const animate = () => {
      if (!imageRef.current || !bounds.current) {
        isAnimating.current = false;
        return;
      }

      currentTranslateY.current = lerp(
        currentTranslateY.current,
        targetTranslateY.current,
        0.1
      );

      const diff = Math.abs(currentTranslateY.current - targetTranslateY.current);
      
      if (diff > 0.01) {
        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.3)`;
        rafId.current = requestAnimationFrame(animate);
      } else {
        // Stop animation when close enough to target
        isAnimating.current = false;
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
      }
    };

    const onScroll = () => {
      if (!bounds.current || !imageRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const elementMiddle = bounds.current.top + bounds.current.height / 2;
      const windowMiddle = scrollY + windowHeight / 2;
      const distanceFromCenter = windowMiddle - elementMiddle;

      targetTranslateY.current = distanceFromCenter * speed;
      
      // Start animation loop only if not already running
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    // Throttle scroll events to improve performance
    const throttledScroll = throttle(onScroll, 16); // ~60fps
    window.addEventListener("scroll", throttledScroll, { passive: true });
    onScroll(); // call once to initialize

    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", throttledScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      isAnimating.current = false;
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
