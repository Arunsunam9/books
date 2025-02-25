import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3 shadow-md  rounded-3xl">
      {/* Left - Dashboard Title */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* Right - Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Search Icon */}
        <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;
