import Image from "next/image";
import React from "react";
// import MyButton from "@/components/ui/Button";
// import MyHeroInfo from "@/components/ui/heroinfo";
// import MyDateTime from "../ui/datetime";
// import MyForTitle from "@/components/ui/fortitle";

const MyPhotoCard = () => {
  return (
    <div className=" flex flex-row gap-5 ">
      <div>
        <Image
          src="/images/photo/third.png"
          alt="testgd"
          width={500}
          height={400}
          className="object-cover  py-6"
        />
      </div>
      <div className=" m-4 py-5">
        {/* <MyForTitle title="Interior Work" /> */}
        <h2 className="text-slate-500 text-4xl font-bold gap-8 hover:text-yellow-500 ml-3 m-3">Interior Work</h2>
        <button
          className="px-4 py-2 m-4 border-2 border-yellow-500 text-slate-500 bg-white  font-bold hover:bg-yellow-500 transition-colors duration-300"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "20px" }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default MyPhotoCard;
