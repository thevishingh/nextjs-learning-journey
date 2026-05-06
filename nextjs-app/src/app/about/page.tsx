import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Us
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to MyApp, a modern web application built with Next.js and Tailwind CSS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
              <p className="text-gray-700">
                To deliver exceptional user experiences with clean, responsive, and performant applications.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-purple-600 mb-3">Our Vision</h2>
              <p className="text-gray-700">
                To build reliable and scalable solutions that empower users worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
