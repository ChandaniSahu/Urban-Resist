"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-red-500 ${
      pathname === path ? "text-red-500 font-semibold" : "text-gray-700"
    }`;

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="hidden sm:block text-xl font-semibold text-gray-800">
            UrbanResist
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className={linkClass("/")}>
            Map
          </Link>

          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>

          <Link href="/report" className={linkClass("/report")}>
            Report Hazard
          </Link>
        </div>

      </div>
    </nav>
  );
}