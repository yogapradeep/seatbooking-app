import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/custom.scss";
import "./globals.css";
import AppLayout from "@/Components/Layouts/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "co-working space booking-app",
  description:
    "India’s Leading Managed Office & Enterprise Coworking Space Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
