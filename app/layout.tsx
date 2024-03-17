import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import {Inter,Space_Grotesk} from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'

const inter  = Inter({
  subsets:['latin'],
  weight:["100","200","300","400","500","600","700","800","900"],
  variable:"--font-inter"
})

const space_Grotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700'],
  variable:"--font-space_Grotesk"
})

// if you want to change the title and description of website you can do it here by using the metadata import it first and then exprot metadat:Metadata and in that use the title and description
export const metadata:Metadata = {
  title:"Mgit_Overflow",
  description:"Mgit_overflow is a platform for asking questions and connecting with people who contribute unique insights and quality answers.",
  icons:{
    icon:'/assets/images/site-icon.png'
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}