"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

interface ClientsProps {
	onClose?: () => void;
	onMinimize?: () => void;
	onMaximize?: () => void;
	size?: "minimized" | "normal" | "maximized";
	onDoubleClick?: () => void;
}

const Clients = ({
  onClose,
  onMinimize,
  onMaximize,
  size = "normal",
        onDoubleClick,
}: ClientsProps) => {
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
      className={`${currentStyle.container} z-40 bg-black border border-gray-700  rounded-lg custom-scrollbar transition-all ${
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
          <span className="ml-2 text-white text-sm truncate">Testimonials</span>
        )}
        {size === "normal" && (
          <span className="ml-auto text-gray-400 text-xs select-none">⋮⋮ Drag to move</span>
        )}
      </div>

      {/* Content */}
      <section id="testimonials" className={`${currentStyle.content} py-10`}>
        <h1 className="heading">
          Kind words from
          <span className="text-purple"> satisfied clients</span>
        </h1>

        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-10 w-5"
                  />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
