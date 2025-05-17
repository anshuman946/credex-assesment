"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

const steps = [
  {
    title: "Upload License",
    description: "Simply upload your software license details through our secure portal.",
    icon: Upload,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Get Valuation",
    description: "Our AI-powered system instantly analyzes and provides the best market value.",
    icon: DollarSign,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Get Paid",
    description: "Accept the offer and receive payment through your preferred method within 24 hours.",
    icon: CreditCard,
    color: "bg-purple-500/10 text-purple-500",
  },
]

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          How <span className="text-primary">It Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our streamlined process makes selling your unused software licenses quick and hassle-free.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariants} className="relative">
            <div className="bg-card rounded-xl p-8 h-full border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mb-6`}>
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-primary text-4xl font-light"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </div>

            <div className="md:hidden flex justify-center mt-4">
              {index < steps.length - 1 && (
                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="text-primary text-4xl font-light"
                >
                  ↓
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
