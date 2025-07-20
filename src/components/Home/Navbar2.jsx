"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewTransitionStyles = () => (
  <style>{`
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation: none !important;
    }

    ::view-transition-group(root) {
      z-index: auto !important;
    }

    ::view-transition-image-pair(root) {
      isolation: isolate;
      will-change: transform, opacity, clip-path;
      z-index: 1;
    }

    ::view-transition-new(root) {
      z-index: 10000;
      animation: none !important;
    }

    ::view-transition-old(root) {
      z-index: 1;
      animation: none !important;
    }
  `}</style>
);

const Nav = () => {
  const navigate = useNavigate();

  const slideInOut = async (path) => {
    const animation1 = document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0%)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
      }
    );

    const animation2 = document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
      }
    );

    await Promise.all([animation1.finished, animation2.finished]);
    navigate(path);
  };

  return (
    <>
      <ViewTransitionStyles />
      <nav className="fixed top-0 left-0 w-full px-7 py-5 flex justify-between items-center z-50">
        <div className="text-white font-mono text-sm font-semibold uppercase">
          <button
            onClick={() => slideInOut("/")}
            className="hover:opacity-80 transition"
          >
            Index
          </button>
        </div>
        <div className="flex gap-8 text-white font-mono text-sm font-semibold uppercase">
          <button
            onClick={() => slideInOut("/projects")}
            className="hover:opacity-80 transition"
          >
            Projects
          </button>
          <button
            onClick={() => slideInOut("/info")}
            className="hover:opacity-80 transition"
          >
            Info
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
