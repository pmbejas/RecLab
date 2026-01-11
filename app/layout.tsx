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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}