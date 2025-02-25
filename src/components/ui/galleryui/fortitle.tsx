import React from "react";
// import MyDateTime from "@/components/ui/datetime";

type Props = {
  title: string;
};

const MyForTitle: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1
        className="text-white px-3 py-3 hover:text-yellow-500"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "30px" }}
      >
        {title}
      </h1>
    
    </div>
  );
};

export default MyForTitle;
