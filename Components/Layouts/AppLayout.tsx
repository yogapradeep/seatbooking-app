"use client";
import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import React from "react";
import Footer from "@/Sections/Footer";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-5 pt-5">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
