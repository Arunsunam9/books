import React from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import ProductCarousel from "@/components/ui/homenavbar/productview";

// import Home from "@/app/home/page";
// import Home from "@/app/home/page";

function Main() {
  return (
    <div>
      <div>
        <nav className="bg-slate-800 text-white p-0.5  text-xs ">
          <div className=" flex justify-between items-center m-1">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white" />
              <span>New Baneshwor</span>
            </div>
            <ul className="hidden md:flex ">
              <li>
                <a href="/" className="hover:text-gray-200 m-3">
                  tel : +977 9818847729
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-200 m-3">
                  books_stationery@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mt-6 flex items-center justify-center bg-gray-100">
        <ProductCarousel />

      </div>
     

    </div>
  );
}

export default Main;

