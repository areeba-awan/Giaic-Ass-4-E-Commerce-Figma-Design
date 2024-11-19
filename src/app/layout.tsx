
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

import { Heebo} from "next/font/google";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Assignment-4 Responsive E-Commerce Figma Design",
  description: "NextJs project,Responsive E-Commerce Website Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className} >
        <div className="w-full h-auto md:-w-[1462px] lg:-w-[1462px] md:h-auto lg:h-auto bg-[#F2F0F1] border-4 mx-auto">
        <Navbar />
          {children}
          <Footer />
          <h4 className="text-purple-900 font-extrabold text-center text-sm lg:text-base mt-0 md:mt-0">
            Created By : Areeba Tanveer Awan
          </h4>
        </div>
      </body>
    </html>
  );
}