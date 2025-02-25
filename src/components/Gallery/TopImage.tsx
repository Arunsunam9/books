import Image from "next/image";
import React from "react";
// import MyButton from "@/components/ui/Button";
// import Contact from "@/app/contact/page";
import Link from "next/link";

const TopImage = () => {
  return (
    <div className="">
      <Image
        src="/images/photo/news-bg.png"
        alt="testgd"
        width={1600}
        height={1080}
        className="object-cover w-400 h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-start  ml-20  ">
        <button
          className=" text-white px-3 py-3 "
          style={{ fontFamily: "'Poppins', sans-serif ", fontSize: "15px" }}
        >
          <Link href="/">HOME</Link>
        </button>
        <h6
          className="text-white px-3 py-3"
          style={{ fontFamily: "'Poppins', sans-serif ", fontSize: "15px" }}
        ></h6>
        <h6
          className="text-yellow-900"
          style={{ fontFamily: "'Poppins', sans-serif ", fontSize: "15px" }}
        >
          GALLERY
        </h6>
      </div>
      <div className="absolute  right-8" style={{ top: "340px" }}>
        <Image
          src="/images/photo/whatsapp.svg"
          alt="whatsapp"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default TopImage;
