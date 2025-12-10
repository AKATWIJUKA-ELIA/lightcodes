"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TiTick } from "react-icons/ti";
import React from "react";

interface ContactProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  size?: "minimized" | "normal" | "maximized";
}

const Contact = ({
  onClose,
  onMinimize,
  onMaximize,
  size = "normal",
}: ContactProps) => {
  const [sending, setsending] = useState(false)
  const [Alert, setAlert] = useState(false)
  const [Error, setError] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })

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

  const sendEmail = async (fromEmail: any, subject: any, message: any) => {
    setsending(true)
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'eliatranquil@gmail.com',
          subject: subject,
          text: ` This Message is from ${fromEmail}  \n  ${message}`
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setsending(false)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 5000);
        console.log(data.message);
      } else {
        setError(true)
        setsending(false)
        console.log(`Error: ${data.message}`);
      }

    } catch (error) {
      console.error('An error occurred while sending the email.');
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { email, subject, message } = formData
    sendEmail(email, subject, message)
    setFormData({
      email: "",
      subject: "",
      message: "",
    })
    console.log("Form submitted:", formData)
  }

  return (
    <div
      ref={dragRef}
      className={`${currentStyle.container} z-40 bg-black border border-gray-700  rounded-lg custom-scrollbar transition-all ${
        isDragging ? "duration-0" : "duration-300"
      } ease-in-out ${isDragging ? "select-none" : ""}`}
      style={dragStyle}
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
          <span className="ml-2 text-white text-sm truncate">Contact</span>
        )}
        {size === "normal" && (
          <span className="ml-auto text-gray-400 text-xs select-none">⋮⋮ Drag to move</span>
        )}
      </div>

      {/* Content */}
      <div id="contact" className={`${currentStyle.content} flex flex-col-reverse md:flex md:flex-row mx-auto mt-5 mb-10 gap-[10%] bg-gradient-to-l from-black-100 via-black-300 to-black-100 rounded-3xl`}>
        <Card className="mt-5 md:w-[50%] text-white">
          <CardHeader>
            <div className="flex gap-[10%]">
              <div className="flex text-2xl font-bold mx-auto">Contact</div>
              <div className="flex">{Alert ? (<h1 className="text-inline font-semi-bold flex text-green-500">Your message has been sent we will reply ASAP <TiTick className="mt-1 text-xl text-green-500" /></h1>) : (<h1></h1>)}</div>
              <div className="flex">{Error ? (<h1 className="text-inline font-semi-bold flex text-red-500">Sorry an Error Occured</h1>) : (<h1></h1>)}</div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Subject <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-indigo-900 hover:bg-white/90">
                {sending ? ("Sending Message") : ("Send Message")}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="flex flex-col mt-2 justify-center items-center">
          <h1 className="flex text-xl">
            Let&apos;s Chat
          </h1>
          <div className="flex mt-5">
            <h1 className="text-xl">
              Leave a message I&apos;ll Respond ASAP
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;