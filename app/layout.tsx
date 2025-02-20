import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import AuthProvider from "@/components/FirebaseAuthProvider";
import Cursor from "@/components/Cursor/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grunfeld Dashboard",
  description: "forge innovation, shape tomorrow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Cursor/>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
