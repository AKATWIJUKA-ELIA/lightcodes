"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Link from "next/link";

interface ExperienceProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onDoubleClick?: () => void;
  size?: "minimized" | "normal" | "maximized";
}

const Experience = ({
  onClose,
  onMinimize,
  onMaximize,
        onDoubleClick,
  size = "normal",
}: ExperienceProps) => {
  // Dragging state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (size !== "normal") return;
      if ((e.target as HTMLElement).closest("[data-no-drag]")) return;
      setIsDragging(true);
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      initialPos.current = { x: position.x, y: position.y };
      e.preventDefault();
    },
    [size, position]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;
      setPosition({
        x: initialPos.current.x + deltaX,
        y: initialPos.current.y + deltaY,
      });
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (size !== "normal") return;
      if ((e.target as HTMLElement).closest("[data-no-drag]")) return;
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartPos.current = { x: touch.clientX, y: touch.clientY };
      initialPos.current = { x: position.x, y: position.y };
    },
    [size, position]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStartPos.current.x;
      const deltaY = touch.clientY - dragStartPos.current.y;
      setPosition({
        x: initialPos.current.x + deltaX,
        y: initialPos.current.y + deltaY,
      });
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    if (size === "maximized" || size === "minimized") {
      setPosition({ x: 0, y: 0 });
    }
  }, [size]);

  const sizeStyles = {
    minimized: {
      container: "fixed bottom-20 left-4 w-64 h-12 overflow-hidden",
      content: "hidden",
      header: "flex items-center gap-2 h-full px-4 bg-gray-800 rounded-lg",
    },
    normal: {
      container: "absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 overflow-auto",
      content: "block",
      header: "flex items-center gap-2 mb-6 sticky top-0 z-50 backdrop-blur-3xl bg-gray-600 opacity-90 w-full h-8 px-4 rounded-t-lg cursor-move",
    },
    maximized: {
      container: "fixed inset-0 overflow-auto",
      content: "block",
      header: "flex items-center gap-2 mb-6 sticky top-0 z-50 backdrop-blur-3xl bg-gray-600 opacity-90 w-full h-10 px-4 rounded-t-lg",
    },
  };

  const currentStyle = sizeStyles[size];
  const dragStyle = size === "normal" ? { transform: `translate(${position.x}px, ${position.y}px)` } : {};

  return (
    <div
      ref={dragRef}
      className={`${currentStyle.container} z-40 bg-black border border-gray-700 rounded-lg custom-scrollbar transition-all ${
        isDragging ? "duration-0" : "duration-300"
      } ease-in-out ${isDragging ? "select-none" : ""}`}
      style={dragStyle}
      onDoubleClick={onDoubleClick}
    >
      {/* macOS Window Controls */}
      <div
        className={currentStyle.header}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          data-no-drag
          className="w-3 h-3 bg-[#FF5F56] rounded-full hover:brightness-90 cursor-pointer flex-shrink-0"
          onClick={() => onClose?.()}
          title="Close"
        />
        <div
          data-no-drag
          className="w-3 h-3 bg-[#FFBD2E] rounded-full hover:brightness-90 cursor-pointer flex-shrink-0"
          onClick={() => onMinimize?.()}
          title="Minimize"
        />
        <div
          data-no-drag
          className="w-3 h-3 bg-[#27C93F] rounded-full hover:brightness-90 cursor-pointer flex-shrink-0"
          onClick={() => onMaximize?.()}
          title="Maximize"
        />
        {size === "minimized" && (
          <span className="ml-2 text-white text-sm truncate">Experience</span>
        )}
        {size === "normal" && (
          <span className="ml-auto text-gray-400 text-xs select-none">⋮⋮ Drag to move</span>
        )}
      </div>

      {/* Content - Only render when not minimized to prevent animation errors */}
      {size !== "minimized" && (
        <div className={`${currentStyle.content} py-10 w-full`}>
          <h1 className="heading">
            My <span className="text-purple">work experience</span>
          </h1>

          <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      <Link href={card.link} target="_blank">
                        {card.title}
                      </Link>
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
