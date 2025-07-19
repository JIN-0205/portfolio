"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useRef } from "react";

type Spotlight = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

const HeroSection: React.FC = () => {
  const spotlightRefs = useRef<HTMLDivElement[]>([]);
  const spotlights = useRef<Spotlight[]>([]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const initializeSpotlights = () => {
      const numSpotlights = 5;
      const maxSize = 400;
      const minSize = 100;

      spotlights.current = Array.from({ length: numSpotlights }).map(() => ({
        x: Math.random() * (window.innerWidth - maxSize) + maxSize / 2,
        y: Math.random() * (window.innerHeight - maxSize) + maxSize / 2,
        dx: (Math.random() - 0.5) * 6,
        dy: (Math.random() - 0.5) * 6,
        size: Math.random() * (maxSize - minSize) + minSize,
      }));
    };

    let animationFrameId: number;

    const updateSpotlights = () => {
      spotlights.current.forEach((spotlight, index) => {
        if (
          spotlight.x - spotlight.size / 2 <= 0 ||
          spotlight.x + spotlight.size / 2 >= window.innerWidth
        ) {
          spotlight.dx *= -1;
        }
        if (
          spotlight.y - spotlight.size / 2 <= 0 ||
          spotlight.y + spotlight.size / 2 >= window.innerHeight
        ) {
          spotlight.dy *= -1;
        }

        // 位置の更新
        spotlight.x += spotlight.dx;
        spotlight.y += spotlight.dy;

        // DOM要素の位置とサイズを更新
        const ref = spotlightRefs.current[index];
        if (ref) {
          ref.style.left = `${spotlight.x}px`;
          ref.style.top = `${spotlight.y}px`;
          ref.style.width = `${spotlight.size}px`;
          ref.style.height = `${spotlight.size}px`;
        }
      });

      animationFrameId = requestAnimationFrame(updateSpotlights);
    };

    initializeSpotlights();
    updateSpotlights();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      id="top"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 snap-start px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Spotlights */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) spotlightRefs.current[index] = el;
          }}
          className={`absolute rounded-full blur-3xl opacity-30`}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(${50 * index}, ${
              255 - 50 * index
            }, 255, 0.6), rgba(${50 * index}, ${255 - 50 * index}, 255, 0))`,
            left: `${spotlights.current[index]?.x || 0}px`,
            top: `${spotlights.current[index]?.y || 0}px`,
            width: `${spotlights.current[index]?.size || 150}px`,
            height: `${spotlights.current[index]?.size || 150}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="z-10 text-center space-y-6 sm:space-y-8">
        {/* Greeting */}
        <div className="space-y-2 sm:space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            I&apos;m JIN
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light">
            Web Developer
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Crafting beautiful and functional web experiences with modern
            technologies
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8">
          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="group border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/JIN-0205"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/jin-nakano-087b44308/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="mailto:contact@jin-nakano.net"
            className="group p-3 bg-slate-800 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
