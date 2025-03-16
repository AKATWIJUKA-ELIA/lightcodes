"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TiTick } from "react-icons/ti";
import { useSendMail } from "@/lib/hooks/useSendMail";

//  Alert Component for Success & Error Messages
const AlertMessage = ({ message, type }: { message: string; type: "success" | "error" }) => (
  <div className={`text-${type === "success" ? "green" : "red"}-500 flex items-center`}>
    {message} <TiTick className="ml-1 text-xl" />
  </div>
);

const Contact = () => {
  const { sendMail, loading } = useSendMail();
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });

  //  Handle Form Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //  Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, subject, message } = formData;

    const response = await sendMail(email, subject, message);
    if (response) {
      setFormData({ email: "", subject: "", message: "" });
      setAlert({ message: "Your message has been sent! We will reply ASAP.", type: "success" });
    } else {
      setAlert({ message: "Sorry, an error occurred while sending your message.", type: "error" });
    }

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <div className="flex flex-col-reverse md:flex md:flex-row mx-auto mt-5 mb-10 gap-[10%] bg-gradient-to-l from-black-100 via-black-300 to-black-100 rounded-3xl">
      
      <Card className="mt-5 md:w-[50%] text-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Contact</h1>
            {alert && <AlertMessage message={alert.message} type={alert.type} />}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-white">
                  Email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-white">
                  Subject <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>

         
            <div>
              <Label htmlFor="message" className="text-white">
                Message <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-white text-indigo-900 hover:bg-white/90">
              {loading ? "Sending Message..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/*  Right Section with Chat Invitation */}
      <div className="flex flex-col mt-2 justify-center items-center">
        <h1 className="text-xl">Let&apos;s Chat</h1>
        <p className="mt-5 text-xl">Leave a message, and I&apos;ll respond ASAP.</p>
      </div>
    </div>
  );
};

export default Contact;
