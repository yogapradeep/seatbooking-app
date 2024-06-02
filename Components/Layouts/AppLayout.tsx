"use client";
import Footer from "@/Sections/Footer";
import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-5 ">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
