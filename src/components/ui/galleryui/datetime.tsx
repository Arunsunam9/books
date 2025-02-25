
import React, { useEffect, useState } from "react";

const MyDateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long", // Full day name
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      className="text-black px-3 py-3"
      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px" }}
    >
      <p>{`Today is: ${formattedDate}`}</p>
      <p>{`Current time: ${formattedTime}`}</p>
    </div>
  );
};

export default MyDateTime;
