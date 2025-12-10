"use client"

import { FaLocationArrow, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"
import { Typewriter } from "nextjs-simple-typewriter"
import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { socialMedia } from "@/data"
import Link from "next/link"
import Image from "next/image"
"use client"

import { FaLocationArrow, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"
import { Typewriter } from "nextjs-simple-typewriter"
import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { socialMedia } from "@/data"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Spotlights */}
      <div className="pointer-events-none absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="#7c3aed" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#3b82f6" />
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Spotlights */}
      <div className="pointer-events-none absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="#7c3aed" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#3b82f6" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-slate-950 bg-grid-white/[0.02]">
        <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Grid Background */}
      <div className="absolute inset-0 bg-slate-950 bg-grid-white/[0.02]">
        <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-20">
        <div className="mx-auto flex w-full flex-col items-center gap-8 md:gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="mt-10 md:mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-slate-300">Available for work</span>
            </div>

            {/* Main Heading */}
            <TextGenerateEffect
              words="Bring Your Ideas to Life. Concepts into Seamless User Experiences"
              className="text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            />

            {/* Typewriter Subtitle */}
            <p className="mt-6 text-lg text-slate-400 md:text-xl lg:text-2xl">
              Hey! I&apos;m Elia, a{" "}
              <span className="font-semibold text-violet-400">
                <Typewriter
                  words={[" Software Engineer", " Web Developer </> ", " Networker"]}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={4000}
                />
              </span>
              <br />
              based in Uganda.
            </p>

            {/* CTA Buttons */}
            <div className=" flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a href="#about">
                <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
              </a>
              {/* <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-transparent px-7 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                Get in touch
              </a> */}
            </div>

            {/* Social Links */}
            <div className="mt-10 flex md:hidden items-center gap-4">
              <span className="text-sm text-slate-500">Find me on</span>
              <div className="flex gap-3">
                {socialMedia?.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 transition-all hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
                  >
                    {item.name === "github" && <FaGithub className="h-5 w-5" />}
                    {item.name === "linkedin" && <FaLinkedin className="h-5 w-5" />}
                    {item.name === "twitter" && <FaTwitter className="h-5 w-5" />}
                    {item.name ==="stack-overflow" && <FaStackOverflow className="h-5 w-5" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[30%]">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-violet-500/20 blur-xl" />

            {/* Image container */}
            <div className="relative   md:mt-0 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 p-2 backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/codenogb.png"
                  alt="Developer workspace"
                  width={800}
                  height={700}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 rounded-lg border border-slate-700 bg-slate-900/90 px-2 py-2 sm:px-4 sm:py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-500/20">
                    <span className="text-sm sm:text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">50+</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">Projects Done</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 rounded-lg border border-slate-700 bg-slate-900/90 px-2 py-2 sm:px-4 sm:py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-500/20">
                    <span className="text-sm sm:text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">5+</p>
                    <p className="text-[10px] sm:text-xs text-slate-400">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500">Scroll down</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-600 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-slate-400" />
          </div>
        </div>
      </div> */}
    </section>
  )
}
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500">Scroll down</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-600 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-slate-400" />
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Hero
export default Hero
