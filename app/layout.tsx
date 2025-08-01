
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Import ThemeProvider
export const metadata: Metadata = {
  title: "portfolio",
  description: "Professional Full Stack Developer Portfolio", // Updated description
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`html {
          font-family: ${GeistSans.style.fontFamily};
          --font-sans: ${GeistSans.variable};
          --font-mono: ${GeistMono.variable};
        }`}</style>
      </head>
      <body>
        <ThemeProvider  attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
      
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
