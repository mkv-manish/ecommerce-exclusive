import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/CartProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Discover a world of shopping at your fingertips. Our e-commerce platform offers a seamless, enjoyable, and secure online shopping experience for everyone. With a vast selection of products across various categories, we are committed to providing quality, value, and convenience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Providers>
          <TopHeader />
          <Navbar />

          {children}
          <Toaster />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
