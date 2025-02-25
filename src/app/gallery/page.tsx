"use client";

import React from "react";
import TopImage from "@/components/Gallery/TopImage";
import HeroSection from "@/components/Gallery/HeroSection";
import MyPhotoCard from "@/components/Gallery/photocard";
import MyPhotoCard2 from "@/components/Gallery/photocard2";
import MyPhotoCard3 from "@/components/Gallery/photocard3";
import { useRouter } from "next/navigation";
const Gallery = () => {
  const router = useRouter(); // ✅ Declare router here

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    localStorage.removeItem("role"); // Remove the role
    router.push("/login"); // ✅ Now router is correctly used
  };
  return (
    <div className="flex flex-col justify-center items-center  m-3">
      <div>
        <TopImage />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <MyPhotoCard />
      </div>
      <div>
        <MyPhotoCard2 />
      </div>
      <div>
        <MyPhotoCard3 />
      </div>
      <div className="text-red-700 text-4xl">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Gallery;
