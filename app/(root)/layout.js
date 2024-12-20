"use client";
import { useState } from "react";
import Sidenav from "../(components)/sidenav";
import Topnav from "../(components)/topnav";

export default function Layout({ children }) {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen">
      {/* Top navigation bar */}
      <Topnav toggleSidenav={toggleSidenav} />

      {/* Main content with dynamic left margin and constant right margin */}
      <div
        className={`${
          isSidenavOpen ? "ml-[200px]" : "ml-0"
        } transition-all duration-300 h-screen`}
      >
        {children}
      </div>

      {/* Sidenav */}
      <Sidenav isSidenavOpen={isSidenavOpen} />
    </div>
  );
}
