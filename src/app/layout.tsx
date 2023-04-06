'use client'
import Footer from "components/Footer"
import Navbar from "components/Navbar"
import Head from "next/head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
      <div>
        <Navbar />

        {children}
        <Footer />
      </div>
    </body>
    </html >
  )
}
