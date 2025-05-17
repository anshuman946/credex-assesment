"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Bot } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does payment take?",
  "Is my data secure?",
]

// Mock AI responses
const getAIResponse = (question: string): string => {
  const responses: Record<string, string> = {
    "how do i sell my license":
      "To sell your license, simply click the 'Sell My Licenses' button on our homepage, upload your license details, and follow the guided process. Our system will provide an instant valuation, and you can accept or decline the offer.",
    "what types of licenses do you accept":
      "We accept a wide range of software licenses including Microsoft Office, Adobe Creative Cloud, AutoCAD, Windows Server, Oracle Database, SAP, and many more. If you're unsure about your specific license, please contact our support team.",
    "how long does payment take":
      "Once you accept our offer, you'll receive payment within 24 hours. We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency.",
    "is my data secure":
      "We use bank-level encryption (256-bit SSL) to protect all your data. We never share your information with third parties, and we delete sensitive license data once the transaction is complete.",
    default:
      "Thank you for your question. Our team is reviewing it and will get back to you shortly. For immediate assistance, please contact our support team at support@softsell.com.",
  }

  const normalizedQuestion = question.toLowerCase().trim()

  for (const key in responses) {
    if (normalizedQuestion.includes(key)) {
      return responses[key]
    }
  }

  return responses.default
}

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi there! How can I help you with selling your software licenses today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and typing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuestionClick = (question: string) => {
    setInput(question)

    // Focus the input after setting the value
    const inputElement = document.getElementById("chat-input")
    if (inputElement) {
      inputElement.focus()
    }
  }

  return (
    <motion.div
      className="w-[350px] h-[500px] bg-background rounded-xl shadow-lg border border-border flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex justify-between items-center bg-primary/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">SoftSell Assistant</h3>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-muted rounded-lg p-3">
                <div className="flex space-x-1">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0,
                    }}
                    className="w-2 h-2 rounded-full bg-foreground/50"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0.2,
                    }}
                    className="w-2 h-2 rounded-full bg-foreground/50"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0.4,
                    }}
                    className="w-2 h-2 rounded-full bg-foreground/50"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 2 && (
        <div className="px-4 py-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs py-1 h-auto"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex space-x-2"
        >
          <Input
            id="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
