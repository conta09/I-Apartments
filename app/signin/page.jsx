'use client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // Replace this with your real authentication logic
    console.log('Redirecting to Google Sign In...');
    router.push('/'); // Temporarily go back home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign in to ApartX
        </h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition"
        >
          <FaGoogle className="text-red-500 text-lg" />
          Sign in with Google
        </button>

        <p className="text-sm text-center text-gray-500">
          By signing in, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
