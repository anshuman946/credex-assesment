"use client"

import { motion } from "framer-motion"
import { Shield, Clock, BadgeDollarSign, Award } from "lucide-react"

const features = [
  {
    title: "Secure Transactions",
    description: "Bank-level encryption and secure payment processing for every transaction.",
    icon: Shield,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Fast Payouts",
    description: "Get paid within 24 hours of accepting an offer, no lengthy waiting periods.",
    icon: Clock,
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    title: "Best Market Value",
    description: "Our AI valuation ensures you get the highest possible price for your licenses.",
    icon: BadgeDollarSign,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Trusted Expertise",
    description: "With 10+ years in the industry, we've facilitated over $50M in license sales.",
    icon: Award,
    color: "bg-blue-500/10 text-blue-500",
  },
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

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
          Why Choose <span className="text-primary">SoftSell</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're committed to making software license reselling simple, secure, and profitable for you.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm h-full"
          >
            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
