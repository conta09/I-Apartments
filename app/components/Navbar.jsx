'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();

  const languages = [
    { code: 'en', label: 'EN', emoji: '🇺🇸' },
    { code: 'tr', label: 'TR', emoji: '🇹🇷' },
  ];
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    setLangOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
            <HiHome className="text-blue-600 h-6 w-6" />
            <span>ApartX</span>
          </div>

          {/* Right section: Call, Language, Sign In */}
          <div className="flex items-center gap-6">
            {/* Call info */}
            <div className="hidden md:flex items-center gap-2 border-r pr-4">
              <FaPhoneAlt className="text-gray-600" />
              <div className="leading-tight">
                <span className="text-xs text-gray-500">Call us at</span>
                <div className="text-sm font-semibold text-blue-800">
                 +90 539 105 61 63
                </div>
              </div>
            </div>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-100 transition"
              >
                <span>{currentLang.emoji}</span>
                {currentLang.label}
                <FiChevronDown />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-md z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang)}
                      className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
                    >
                      <span>{lang.emoji}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In */}
            <button
              onClick={() => router.push('/signin')}
              className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <FaUser className="text-gray-600" />
              <span className="text-sm font-medium">SIGN IN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
