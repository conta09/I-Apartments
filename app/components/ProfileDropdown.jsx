"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setTimeout(() => setOpen(false), 300)}
        className="rounded-full p-2 hover:bg-gray-100 transition"
      >
        <FaUserCircle className="h-6 w-6 text-gray-600" />
      </button>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div className="py-2 text-sm text-gray-700">
            <button
              onClick={() => router.push("/auth/signin")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <FcGoogle className="h-5 w-5" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}