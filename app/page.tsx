"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShinyText } from "@/components/ShinnyText";
import {
  Search,
  Filter,
  Globe,
  Star,
  Users,
  BarChart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { useInView } from "react-intersection-observer";
import TypingAnimation from "@/components/TypingAnimation";
import { ImageShowcaseCarousel } from "@/components/ImageShowcaseCarousel";
import Image from "next/image";

const MotionCard = motion(Card);

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
}

const ScrollAnimatedSection = ({ children }: ScrollAnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [iframeUrl, setIframeUrl] = useState<string | null>(null);

  // Close iframe on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIframeUrl(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-4 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0B1C]" />
        <div className="container mx-auto px-6 space-y-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-md"
          >
            <svg
              className="mr-2 h-5 w-5 text-[#6366F1]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {/* <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI-Assisted Search
            </span> */}
            <ShinyText
              text="AI-Assisted Search"
              speed={5}                    
              className="bg-gradient-to-r from-indigo-400 to-purple-400"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="px-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white drop-shadow-lg">
              Find the Perfect{" "}
              <span
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block"
                style={{ minWidth: "clamp(250px, 400px, 100%)" }}
              >
                <TypingAnimation />
              </span>
              <br className="hidden sm:block" /> for Your Brand
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              The #1 platform for influencers & brands to connect and grow 🚀
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-[600px] text-gray-400 md:text-xl"
          >
            Discover and connect with influencers across all major platforms.
            Filter by niche, followers, location, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Registration Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#6366F1] hover:bg-[#5355E8] text-white"
                onClick={() =>
                  setIframeUrl("https://form.jotform.com/250525104244445")
                }
              >
                Register for Influencer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 text-gray-400 hover:text-white"
                onClick={() =>
                  setIframeUrl("https://form.jotform.com/250515734277459")
                }
              >
                Register for Brand
              </Button>
            </div>

            {/* Modal Overlay with iframe */}
            <AnimatePresence>
              {iframeUrl && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
                >
                  {/* Modal Box */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="relative bg-white rounded-2xl shadow-lg w-[90vw] h-[80vh] max-w-4xl overflow-hidden"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIframeUrl(null)}
                      className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10"
                    >
                      ✖
                    </button>
                    {/* iFrame */}
                    <iframe
                      src={iframeUrl}
                      className="w-full h-full rounded-2xl"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social Icons */}
          <div className="pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm text-gray-400 mb-4"
            >
              Find influencers across all major platforms
            </motion.p>
            <div className="flex justify-center gap-8">
              {[
                {
                  name: "YouTube",
                  color: "#FF0000",
                  path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
                {
                  name: "Instagram",
                  color: "#E4405F",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  name: "Twitch",
                  color: "#9146FF",
                  path: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z",
                },
                {
                  name: "X (Twitter)",
                  color: "#FFFFFF",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  name: "Facebook",
                  color: "#1877F2",
                  path: "M18.896 0H5.104C2.282 0 0 2.282 0 5.104v13.792C0 21.718 2.282 24 5.104 24h13.792C21.718 24 24 21.718 24 18.896V5.104C24 2.282 21.718 0 18.896 0zM16.202 8.478h-1.495c-1.167 0-1.391.554-1.391 1.368v1.795h2.785l-.363 2.82h-2.422V24h-2.922v-9.54H8.401v-2.82h2.393V9.146c0-2.37 1.448-3.667 3.563-3.667.978 0 1.82.073 2.068.106v2.393z",
                },
                {
                  name: "LinkedIn",
                  color: "#0077B5",
                  path: "M22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.226.792 24 1.771 24h20.453c.98 0 1.776-.774 1.776-1.733V1.732C24 .774 23.205 0 22.225 0zM7.06 20.452H3.548V9h3.512zm-1.757-13.07c-1.125 0-2.035-.91-2.035-2.035S4.178 3.313 5.303 3.313c1.127 0 2.037.91 2.037 2.036S6.43 7.382 5.303 7.382zm14.648 13.07h-3.51v-5.558c0-1.327-.027-3.032-1.846-3.032-1.847 0-2.13 1.443-2.13 2.935v5.655H9.956V9h3.367v1.565h.048c.47-.89 1.622-1.828 3.343-1.828 3.576 0 4.235 2.353 4.235 5.414v6.301z",
                },
              ].map((icon, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.3 }}
                  style={{ color: icon.color }}
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ScrollAnimatedSection>
        <section className="py-28 px-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-xl max-w-7xl mx-auto">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Testimonials To Our Work
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200">
                Discover what industry experts are saying about the impact and
                potential of influencer marketing.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Image Section */}
      <ScrollAnimatedSection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <div className="rounded-3xl shadow-xl overflow-hidden">
              <ImageShowcaseCarousel />
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Features Section */}
      <ScrollAnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Powerful Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400">
                Everything you need to find and connect with the right influencers.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Advanced Search",
                  description:
                    "Find influencers across Instagram, YouTube, TikTok, and more with our powerful search engine.",
                },
                {
                  icon: Filter,
                  title: "Smart Filters",
                  description:
                    "Filter by niche, follower count, engagement rate, location, and other key metrics.",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description:
                    "Access influencers from over 190 countries and territories worldwide.",
                },
                {
                  icon: Star,
                  title: "Quality Metrics",
                  description:
                    "Evaluate influencers based on engagement, authenticity, and performance metrics.",
                },
                {
                  icon: Users,
                  title: "Audience Insights",
                  description:
                    "Get detailed demographics and interests data for influencer audiences.",
                },
                {
                  icon: BarChart,
                  title: "Campaign Analytics",
                  description:
                    "Track and measure the success of your influencer marketing campaigns.",
                },
              ].map((feature, index) => (
                <MotionCard
                  key={index}
                  className="bg-white/5 border-white/5 backdrop-blur-sm"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <CardHeader>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        duration: 0.5,
                      }}
                    >
                      <feature.icon className="w-10 h-10 text-[#6366F1] mb-4" />
                    </motion.div>
                    <CardTitle className="text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Blog Section */}
      <ScrollAnimatedSection>
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Latest Articles & News
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400">
                Stay up-to-date with the latest insights, trends, and tips in
                influencer marketing.
              </p>
            </div>
            {/* Scrolling Blog Cards */}
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-scroll-infinite hover:paused">
                {[...Array(2)].flatMap((_, repeatIndex) =>
                  [
                    {
                      id: 1,
                      image:
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                      date: "15 MAY",
                      author: "By Jane Doe",
                      category: "Technology",
                      title: "The Future of AI in Marketing",
                      link: "/news/future-of-ai",
                    },
                    {
                      id: 2,
                      image:
                        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                      date: "22 MAY",
                      author: "By John Smith",
                      category: "Lifestyle",
                      title: "Top 10 Tips for a Healthy Work-Life Balance",
                      link: "/news/work-life-balance",
                    },
                    {
                      id: 3,
                      image:
                        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                      date: "30 MAY",
                      author: "By Alice Johnson",
                      category: "Travel",
                      title: "Exploring Hidden Gems in Europe",
                      link: "/news/hidden-gems-europe",
                    },
                    {
                      id: 4,
                      image:
                        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                      date: "5 JUNE",
                      author: "By Michael Brown",
                      category: "Finance",
                      title: "How to Invest Wisely in 2024",
                      link: "/news/invest-wisely-2024",
                    },
                  ].map((card) => (
                    <div
                      key={`${repeatIndex}-${card.id}`}
                      className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-sm w-[500px] mx-4 flex-shrink-0 hover:scale-95 transition-transform duration-300"
                    >
                      <Image
                        src={card.image}
                        alt={`Blog ${card.id}`}
                        width={500}
                        height={192}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="mr-2">
                          <span className="text-red-500 font-semibold">
                            {card.date.split(" ")[0]}
                          </span>{" "}
                          {card.date.split(" ")[1]}
                        </span>
                        <span className="mx-2">|</span>
                        <span>{card.author}</span>
                        <span className="mx-2">|</span>
                        <span>{card.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {card.title}
                      </h3>
                      <a
                        href={card.link}
                        className="text-red-500 hover:text-red-400 font-medium inline-flex items-center"
                      >
                        Read More
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.293 15.707a1 1 0 0 1 0-1.414L13.586 11H3a1 1 0 1 1 0-2h10.586L10.293 5.707a1 1 0 1 1 1.414-1.414l5 5a.997.997 0 0 1 .293.704v.006a.997.997 0 0 1-.293.704l-5 5a1 1 0 0 1-1.414 0z" />
                        </svg>
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
        <style>
          {`
            @keyframes scroll-infinite {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-infinite {
              display: flex;
              animation: scroll-infinite 20s linear infinite;
            }
            .animate-scroll-infinite:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      </ScrollAnimatedSection>
    </div>
  );
}
