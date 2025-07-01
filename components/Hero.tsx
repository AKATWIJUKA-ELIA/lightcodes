"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Play,
	Star,
	Users,
	MapPin,
	Phone,
	Clock,
	Dumbbell,
	Target,
	Trophy,
	ArrowRight,
	CheckCircle,
} from "lucide-react";
import Image from "next/image";

const gymStats = [
	{ label: "Active Members", value: "2,500+", icon: Users },
	{ label: "Years of Excellence", value: "15+", icon: Trophy },
	{ label: "Fitness Classes", value: "50+", icon: Target },
	{ label: "Personal Trainers", value: "25+", icon: Dumbbell },
];

const membershipPlans = [
	{
		name: "Basic",
		price: "$29",
		period: "/month",
		features: ["Gym Access", "Locker Room", "Basic Equipment"],
		popular: false,
	},
	{
		name: "Premium",
		price: "$49",
		period: "/month",
		features: [
			"All Basic Features",
			"Group Classes",
			"Personal Training Session",
			"Nutrition Consultation",
		],
		popular: true,
	},
	{
		name: "Elite",
		price: "$79",
		period: "/month",
		features: [
			"All Premium Features",
			"Unlimited Personal Training",
			"Meal Planning",
			"Recovery Services",
		],
		popular: false,
	},
];

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Fitness Enthusiast",
		image: "/placeholder.svg?height=60&width=60",
		rating: 5,
		text: "This gym transformed my life! The trainers are amazing and the community is so supportive.",
	},
	{
		name: "Mike Chen",
		role: "Professional Athlete",
		image: "/placeholder.svg?height=60&width=60",
		rating: 5,
		text: "Best gym in the city! State-of-the-art equipment and knowledgeable staff.",
	},
	{
		name: "Emily Davis",
		role: "Busy Professional",
		image: "/placeholder.svg?height=60&width=60",
		rating: 5,
		text: "Flexible hours and amazing classes fit perfectly into my busy schedule.",
	},
];
const Hero = () => {
  return (
    <div className="pb-20 pt-36 flex ">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-32 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

                <TextGenerateEffect
                words="Bring Your Ideas to Life. Concepts into Seamless User Experiences"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
              

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hey! I&apos;m Elia, a 
            <Typewriter
                              words={[' Software Engineer',' Web Developer < / > ', ' Networker'] }
                              loop={100}
                              cursor
                              cursorStyle='|'
                              typeSpeed={100}
                              deleteSpeed={100}
                              delaySpeed={4000}
                              
                              />  based in Uganda.
                </p>

                <a href="#about">
                <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                />
                </a>

                <div className="flex flex-row items-center justify-center  gap-4 mt-2">
                {socialMedia?.map((item) => (
                <Link href={item.link} key={item.id}>
                <Image src={item.img} alt={item.name} width={50} height={50} className="border rounded-full p-2" />
                </Link>
                ))}
                </div>

                
        </div>
          
      </div>
      <div className="flex h-[80%] mt-20 hidden md:block " >
                      <Image src="/codenogb.png" alt="imagecode" width={600} height={50} className="border border-gray-900 rounded-md backdrop-blur-sm" />
        </div>

    </div>
  );
};

export default Hero;
