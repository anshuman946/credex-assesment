"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Revolutionizing Software Resale
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Turn Unused Licenses Into <span className="text-primary">Instant Cash</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              SoftSell helps businesses and individuals sell their unused software licenses quickly, securely, and at
              the best market price.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Sell My Licenses
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Get a Quote
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by 10,000+ customers worldwide</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-border">
                <div className="w-full h-8 flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 h-6 w-1/2 bg-muted rounded-md"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-muted rounded-md w-full"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-muted rounded-md"></div>
                    <div className="h-24 bg-muted rounded-md"></div>
                  </div>
                  <div className="h-32 bg-muted rounded-md w-full"></div>
                  <div className="flex justify-end">
                    <div className="h-10 bg-primary/20 rounded-md w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-10 right-10 w-16 h-16 bg-primary/30 backdrop-blur-md rounded-lg"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
              className="absolute bottom-20 left-10 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
