"use client";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://theinlfuencer-contact.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            contact,
            message,
          }),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");

      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="py-10">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white animate-fadeIn">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-300 animate-fadeIn delay-200">
              We would love to hear from you. Fill out the form or use the info
              below.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-sm">
                  Fill out the form below and we will get back to you ASAP.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* first name / last name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name">First name</label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name">Last name</label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* email */}
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* phone */}
                  <div className="space-y-2">
                    <label htmlFor="contact">Phone</label>
                    <Input
                      id="contact"
                      placeholder="Enter your phone number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>

                  {/* message */}
                  <div className="space-y-2">
                    <label htmlFor="message">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  {/* submit */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* contact info cards */}
            <div className="space-y-8">
              <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-indigo-500" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">
                    theinfluencer1001@gmail.com
                  </p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-indigo-500" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">+91 8102856535</p>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-500 hover:scale-105 animate-slideUp delay-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">
                    KIET Group of Institutions
                    <br />
                    Ghaziabad, Uttar Pradesh
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
