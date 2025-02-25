"use client";
import { Search } from "lucide-react";
import { useState } from "react";



export default function Home() {

  const [query, setQuery] = useState("");

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Books&Stationery</div>

        <div className="relative flex-grow mx-4  justify-center items-center ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books & stationery..."
            className="w-full    p-1 pl-10 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About Us
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-gray-200">
              Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
