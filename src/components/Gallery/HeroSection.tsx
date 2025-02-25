import Image from "next/image";
import React from "react";
// import MyButton from "@/components/ui/Button";
import MyHeroInfo from "@/components/ui/galleryui/heroinfo";
// import MyDateTime from "../ui/datetime";

const HeroSection = () => {
  return (
    <div className=" relative flex flex-col gap-2  ">
      <Image
        src="/images/photo/hero.jpeg"
        alt="testgd"
        width={1200}
        height={500}
        className="object-cover w-400 h-[600px] py-10"
        style={{ filter: "blur(1px)" }}
      />
      <div className="absolute bottom-10 left-5">
        <MyHeroInfo />
      </div>
    </div>
  );
};

export default HeroSection;
