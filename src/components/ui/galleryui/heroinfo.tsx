import React from "react";
// import MyDateTime from "@/components/ui/datetime";
import MyForTitle from "@/components/ui/galleryui/fortitle";

const MyHeroInfo = () => {
  return (
    <div className="">
      <div>
        <MyForTitle title="Construction phases" />
      </div>
      <div>
        <h2 className="px-4 py-2 text-white font-bold text-2xl">
          Tuesday, 28 Jan, 2025
        </h2>
      </div>
      <div>
        <button
          className="px-4 py-2 m-4  text-slate-500 bg-white font-bold hover:bg-yellow-500 transition-colors duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "20px" }}
        >
          Read More 
        </button>
      </div>
    </div>
  );
};

export default MyHeroInfo;
