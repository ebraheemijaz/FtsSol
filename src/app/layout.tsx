import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "./main.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FTS TECH - Your IT Partner in Innovation and Growth",
  description:
    "FTS TECH is a cutting-edge software and IT solutions provider dedicated to transforming businesses through innovative technology.",
  keywords:
    "web development, mobile app development, IT solutions, software development, digital transformation",
  openGraph: {
    title: "FTS TECH - Your IT Partner in Innovation and Growth",
    description: "Custom software solutions for your business needs",
    images: ["/assets/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
