"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FooterModal } from "@/components/FooterModal";
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode | null;
  }>({ title: "", content: null });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#0A0B1C] text-white`}
      >
        {/* HEADER with Pink Gradient & Rounded Ends */}
        <header className="fixed top-0 w-full z-50">
          <div className="mx-2 mt-2 bg-[#0A0B1C]/90 rounded-l-3xl rounded-r-3xl shadow-lg">
            <nav className="container mx-auto flex items-center justify-between h-16 px-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/2.png"
                    alt="Logo"
                    width={40} // Specify width
                    height={40} // Specify height
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <span className="text-lg font-bold text-white">
                    The Influencer
                  </span>
                </Link>
              </motion.div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-16">
                {["Home", "About", "Features", "Contact", "Dashboard"].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    {item === "Dashboard" ? (
                      <a
                        href="https://theinfluencer1001.vercel.app/dashboard"
                        className="text-sm text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    ) : (
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="text-sm text-white hover:text-gray-300 transition-colors"
                      >
                        {item}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="text-white hover:text-gray-300 transition-colors focus:outline-none"
                >
                  {mobileNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {mobileNavOpen && (
              <div className="md:hidden ">
                <ul className="flex flex-col items-center space-y-4 py-4">
                  {["Home", "About", "Features", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        onClick={() => setMobileNavOpen(false)}
                        className="text-base text-white hover:text-gray-300 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-20 container mx-auto px-6">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#0A0B1C] border-t border-white/10 mt-10 py-8 text-center">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => openModal("Blog", <p>Coming Soon......</p>)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      openModal(
                        "Support",
                        <p>
                          Effective Date: February 21, 2025
                          <br />
                          <br />
                          <strong>Support Information:</strong>
                          <br />
                          At The Influencer, we are committed to providing
                          top-notch support to our users. If you encounter any
                          issues or have inquiries, please reach out:
                          <br />
                          <br />
                          <strong>1. Email Support:</strong>
                          <br />
                          <a
                            href="mailto:theinfluencer1001@gmail.com"
                            className="text-blue-400"
                          >
                            theinfluencer1001@gmail.com
                          </a>
                          <br />
                          <strong>2. Help Center:</strong>
                          <br />
                          <a
                            href="mailto:theinfluencer1001@gmail.com"
                            className="text-blue-400"
                          >
                            Click here
                          </a>{" "}
                          for FAQs.
                          <br />
                          <strong>3. Community Forum:</strong>
                          <br />
                          Share experiences & get solutions from members.
                          <br />
                          <strong>4. Live Chat (Coming Soon):</strong>
                          <br />
                          Instant assistance is on the way!
                          <br />
                          <br />
                          Best Regards,
                          <br />
                          The Influencer Support Team
                        </p>
                      )
                    }
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() =>
                      openModal(
                        "Privacy Policy",
                        <p>
                          Effective Date: February 21, 2025
                          <br />
                          <br />
                          <strong>Privacy Policy:</strong>
                          <br />
                          We respect your privacy and only collect minimal data
                          to provide our services. We do not sell or distribute
                          your data without your consent.
                          <br />
                          Contact us at: theinfluencer1001@gmail.com
                        </p>
                      )
                    }
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      openModal(
                        "Terms of Service",
                        <p>
                          Effective Date: February 21, 2025
                          <br />
                          <br />
                          <strong>Terms of Service:</strong>
                          <br />
                          By using The Influencer, you agree to comply with our
                          policies and refrain from prohibited activities. We
                          reserve the right to suspend accounts that violate
                          these terms.
                          <br />
                          <br />
                          For inquiries, email: theinfluencer1001@gmail.com
                        </p>
                      )
                    }
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4 justify-center">
                {[
                  {
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/theinfluencer1001/",
                  },
                  {
                    Icon: FaLinkedin,
                    href: "https://www.linkedin.com/company/theinfluencer001/posts/?feedView=all",
                  },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-gray-400 text-xs">
            &copy; {currentYear} The Influencer. All rights reserved.
          </div>
        </footer>

        {/* Footer Modal */}
        <FooterModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalContent.title}
          content={modalContent.content || <p>No content available.</p>}
        />
      </body>
    </html>
  );
}
