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
        const [isVideoPlaying, setIsVideoPlaying] = useState(false)
        const [selectedPlan, setSelectedPlan] = useState("Premium")
        const [formData, setFormData] = useState({
          name: "",
          email: "",
          phone: "",
        })
      
        const handleFormSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          console.log("Form submitted:", formData)
          // Handle form submission logic here
        }
      
        const handleInputChange = (field: string, value: string) => {
          setFormData((prev) => ({ ...prev, [field]: value }))
        }
      
        return (
          <div className="relative min-h-screen overflow-hidden w-full ">
            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="Gym background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>
            </div>
      
            {/* Main Hero Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
              {/* Navigation Bar */}
              <nav className="flex items-center justify-between p-6 lg:px-12">
                <div className="flex items-center space-x-2">
                  <Dumbbell className="w-8 h-8 text-red-500" />
                  <span className="text-2xl font-bold text-white">FitZone</span>
                </div>
                <div className="hidden md:flex items-center space-x-8 text-white">
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Classes
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Trainers
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Membership
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    Contact
                  </a>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black bg-transparent">
                  Member Login
                </Button>
              </nav>
      
              {/* Hero Content */}
              <div className="flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div className="text-white space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-semibold">🔥 LIMITED TIME OFFER</Badge>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                          Transform Your
                          <span className="text-red-500 block">Body & Mind</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl">
                          Join the ultimate fitness experience with state-of-the-art equipment, expert trainers, and a
                          community that motivates you to achieve your goals.
                        </p>
                      </div>
      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                              Start Free Trial
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Start Your Free 7-Day Trial</DialogTitle>
                              <DialogDescription>
                                Experience everything FitZone has to offer with no commitment required.
                              </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                              <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                  id="name"
                                  value={formData.name}
                                  onChange={(e) => handleInputChange("name", e.target.value)}
                                  placeholder="Enter your full name"
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => handleInputChange("email", e.target.value)}
                                  placeholder="Enter your email"
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                  id="phone"
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange("phone", e.target.value)}
                                  placeholder="Enter your phone number"
                                  required
                                />
                              </div>
                              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                                Start Free Trial
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
      
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Watch Tour
                        </Button>
                      </div>
      
                      {/* Key Features */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {gymStats.map((stat, index) => {
                          const Icon = stat.icon
                          return (
                            <div key={index} className="text-center">
                              <Icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                              <div className="text-2xl font-bold">{stat.value}</div>
                              <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                          )
                        })}
                      </div>
      
                      {/* Contact Info */}
                      <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>123 Fitness Ave, Downtown</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-red-500" />
                          <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-red-500" />
                          <span>Open 24/7</span>
                        </div>
                      </div>
                    </div>
      
                    {/* Right Column - Membership Plans */}
                    <div className="lg:ml-8">
                      <Card className="bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
                            <p className="text-gray-600">Start your fitness journey today</p>
                          </div>
      
                          <div className="space-y-4">
                            {membershipPlans.map((plan) => (
                              <div
                                key={plan.name}
                                className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  selectedPlan === plan.name
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => setSelectedPlan(plan.name)}
                              >
                                {plan.popular && (
                                  <Badge className="absolute -top-2 left-4 bg-red-500 text-white">Most Popular</Badge>
                                )}
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                                    <div className="flex items-baseline">
                                      <span className="text-2xl font-bold text-red-500">{plan.price}</span>
                                      <span className="text-gray-600">{plan.period}</span>
                                    </div>
                                  </div>
                                  <div
                                    className={`w-5 h-5 rounded-full border-2 ${
                                      selectedPlan === plan.name ? "border-red-500 bg-red-500" : "border-gray-300"
                                    }`}
                                  >
                                    {selectedPlan === plan.name && <CheckCircle className="w-5 h-5 text-white" />}
                                  </div>
                                </div>
                                <ul className="space-y-1">
                                  {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
      
                          <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3">
                            Join Now - {membershipPlans.find((p) => p.name === selectedPlan)?.price}/month
                          </Button>
      
                          <p className="text-xs text-gray-500 text-center mt-3">
                            No commitment • Cancel anytime • 7-day free trial
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Bottom Section - Testimonials */}
              <div className="bg-black/50 backdrop-blur-sm py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">What Our Members Say</h3>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-white ml-2">4.9/5 from 1,200+ reviews</span>
                    </div>
                  </div>
      
                  <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div>
                              <h4 className="font-semibold text-white">{testimonial.name}</h4>
                              <p className="text-sm text-gray-300">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="flex gap-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-sm">{testimonial.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
      
            {/* Video Modal */}
            <Dialog open={isVideoPlaying} onOpenChange={setIsVideoPlaying}>
              <DialogContent className="max-w-4xl p-0">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p>Gym Tour Video Would Play Here</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )
};

export default Hero;
