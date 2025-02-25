import React from "react";

type Props = {
  title: string;
};

const MyButton: React.FC<Props> = ({ title }) => {
  return (
    <button
      className="text-white px-3 py-3"
      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}
    >
      {title}
    </button>
  );
};

export default MyButton;
