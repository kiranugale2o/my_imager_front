"use client";

import { useState } from "react";

export default function Custom404() {
  return (
    <div className="h-screen bg-black flex justify-center items-center text-center text-white">
      <div className="bg-dark-gray p-8 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
