"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anshuman Dixit",
    role: "CTO",
    company: "TechGrowth Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "SoftSell transformed how we manage our software assets. We recovered over $50,000 from unused licenses that were just sitting idle. The process was incredibly smooth and secure.",
    stars: 5,
  },
  {
    name: "Ayushmaan Mishra",
    role: "IT Director",
    company: "Global Systems Ltd.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I was skeptical at first, but SoftSell exceeded all my expectations. Their valuation was fair, the payment was prompt, and their customer service was exceptional throughout the entire process.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what businesses like yours have to say about SoftSell.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm relative"
          >
            <div className="absolute top-6 right-6 text-primary/30">
              <Quote className="h-12 w-12" />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-foreground/90">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
