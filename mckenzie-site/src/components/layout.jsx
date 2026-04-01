import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-[#343a5c] text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
