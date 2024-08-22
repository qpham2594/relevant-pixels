import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/cursor"; // Import the CustomMouse component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relevant Pixels",
  description: "Making sure the work is meaningful with these pixels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor/> {/* Include the CustomMouse component */}
        {children}
      </body>
    </html>
  );
}

