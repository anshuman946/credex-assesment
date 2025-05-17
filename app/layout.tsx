import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Sell Your Software Licenses Easily",
  description:
    "SoftSell helps you sell your unused software licenses quickly and at the best price. Upload, get valued, get paid.",
  keywords: "software resale, license reselling, software marketplace, sell licenses",
  authors: [{ name: "SoftSell Team" }],
  openGraph: {
    title: "SoftSell - Sell Your Software Licenses Easily",
    description:
      "SoftSell helps you sell your unused software licenses quickly and at the best price. Upload, get valued, get paid.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftSell - Software License Resale Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
