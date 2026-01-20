import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "RecLab - Visual Storytelling",
  description:
    "Visual storytelling through the lens of Alex Morgan. Specializing in portrait, landscape, and documentary photography with a unique artistic perspective.",
  keywords: ["photografia", "visual storytelling", "portrait photography", "landscape", "documentary", "Wedding", "Fashion", "Nature", "narrativas visuales"],
  authors: [{ name: "RecLab" }],
  creator: "RecLab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reclab.photo",
    title: "RecLab - Visual Storytelling",
    description: "Visual storytelling through the lens of RecLab",
    siteName: "RecLab Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "RecLab - Visual Storytelling",
    description: "Visual storytelling through the lens of RecLab",
  },
  generator: "pmwebdeveloper.com",
  icons: {
    icon: [
      {
        url: "/rec-lab-32x32.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/rec-lab-32x32.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/rec-lab.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}