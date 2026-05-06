import Image from "next/image";
import book from "public/book.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Us
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Welcome to MyApp, a modern web application built with Next.js and
              Tailwind CSS. We're dedicated to creating exceptional digital
              experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-blue-600 mb-3">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional user experiences with clean, responsive,
                  and performant applications that make a difference.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-purple-600 mb-3">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To build reliable and scalable solutions that empower users
                  worldwide and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Featured Content
          </h2>
          <div className="relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={book} 
              alt="book cover" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-gray-600 mt-6 text-lg">
            Discover our latest insights and resources
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
