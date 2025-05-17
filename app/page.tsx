"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, MessageSquare } from "lucide-react"
import { useTheme } from "next-themes"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import ChatWidget from "@/components/chat-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Chat widget toggle button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 items-end">
        {/* Theme toggle button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full bg-primary/10 backdrop-blur-sm"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </button>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
          aria-label="Chat with us"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>

      {/* Main content */}
      <main className="flex-grow">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        <section id="how-it-works" className="py-20">
          <HowItWorks />
        </section>

        <section id="why-choose-us" className="py-20 bg-muted/50">
          <WhyChooseUs />
        </section>

        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <ContactForm />
        </section>
      </main>

      <Footer />

      {/* Chat widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-5 z-50"
          >
            <ChatWidget onClose={() => setIsChatOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
