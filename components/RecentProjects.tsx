"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState, useRef, useCallback, useEffect } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

interface RecentProjectsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onDoubleClick?: () => void;
  size?: "minimized" | "normal" | "maximized";
}

const RecentProjects = ({
  onClose,
  onMinimize,
  onMaximize,
  onDoubleClick,
  size = "normal",
}: RecentProjectsProps) => {
  // Dragging state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  // Handle mouse down on header to start dragging
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Only allow dragging in normal mode
      if (size !== "normal") return;
      
      // Don't start drag if clicking on buttons
      if ((e.target as HTMLElement).closest('[data-no-drag]')) return;

      setIsDragging(true);
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      initialPos.current = { x: position.x, y: position.y };
      e.preventDefault();
    },
    [size, position]
  );

  // Handle mouse move for dragging
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

  // Handle mouse up to stop dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle touch events for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (size !== "normal") return;
      if ((e.target as HTMLElement).closest('[data-no-drag]')) return;

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

  // Add/remove global event listeners
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

  // Reset position when size changes to maximized or minimized
  useEffect(() => {
    if (size === "maximized" || size === "minimized") {
      setPosition({ x: 0, y: 0 });
    }
  }, [size]);

  // Size-based styles
  const sizeStyles = {
    minimized: {
      container: "fixed bottom-20 left-4 w-64 h-12 overflow-hidden",
      content: "hidden",
      header: "flex items-center gap-2 h-full px-4 bg-gray-800 rounded-lg",
    },
    normal: {
      container: "absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 overflow-auto",
      content: "block",
      header: "flex items-center gap-2 mb-6 sticky top-0 z-40 backdrop-blur-3xl bg-gray-600 opacity-90 w-full h-8 px-4 -mt-4 rounded-t-lg cursor-move",
    },
    maximized: {
      container: "fixed inset-0 overflow-auto",
      content: "block",
      header: "flex items-center gap-2 mb-6 sticky top-0 z-50 backdrop-blur-3xl bg-gray-600 opacity-90 w-full h-10 px-4 rounded-t-lg",
    },
  };

  const currentStyle = sizeStyles[size];

  // Apply transform for dragging (only in normal mode)
  const dragStyle =
    size === "normal"
      ? {
          transform: `translate(${position.x}px, ${position.y}px)`,
        }
      : {};

  return (
    <div
      ref={dragRef}
      className={`${currentStyle.container} z-40 bg-black border custom-scrollbar border-gray-700 rounded-lg transition-all 
      ${
        isDragging ? "duration-0" : "duration-300"
      } ease-in-out ${isDragging ? "select-none" : ""}`}
      style={dragStyle}
      onDoubleClick={
        onDoubleClick
      }
    >
      {/* macOS Window Controls - Draggable Header */}
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
        {/* Show title when minimized */}
        {size === "minimized" && (
          <span className="ml-2 text-white text-sm truncate">Recent Projects</span>
        )}
        {/* Drag indicator for normal mode */}
        {size === "normal" && (
          <span className="ml-auto text-gray-400 text-xs select-none">⋮⋮ Drag to move</span>
        )}
      </div>

      {/* Content - hidden when minimized */}
      <div className={`${currentStyle.content} p-4`}>
        <div className={`${size === "maximized" ? "py-10" : "py-20"} relative z-0`} id="projects">
          <h1 className="heading sticky top-8 z-50 p-4 rounded-t-md  backdrop-blur-2xl">
            A small selection of <span className="text-purple">recent projects</span>
          </h1>
          <div
            className={`flex flex-wrap items-center justify-center p-4 ${
              size === "maximized" ? "gap-8 lg:gap-12" : "gap-16"
            } mt-10`}
          >
            {projects.map((item) => (
              <div
                className={`${
                  size === "maximized"
                    ? "lg:min-h-[28rem] h-[22rem] sm:w-80 w-[70vw]"
                    : "lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw]"
                } flex items-center justify-center relative z-10`}
                key={item.id}
              >
                <Link href={item.link} target="_blank">
                  <PinContainer title={item.link}>
                    <div
                      className={`relative flex items-center justify-center ${
                        size === "maximized"
                          ? "sm:w-80 w-[70vw] h-[18vh] lg:h-[25vh]"
                          : "sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh]"
                      } mb-10`}
                    >
                      <div
                        className="relative w-full h-full lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img src="/bg.png" alt="bgimg" className="z-0" />
                      </div>
                      <img src={item.img} alt="cover" className="z-0 absolute bottom-0" />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <img src={icon} alt="icon5" className="p-2" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </PinContainer>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
