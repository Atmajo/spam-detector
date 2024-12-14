"use client";

import Header from "@/components/Header";
import QueryProvider from "@/components/providers/QueryProvider";
import React from "react";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="relative z-50">
      <Header />
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
};

export default HomeLayout;
