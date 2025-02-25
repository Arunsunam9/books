"use client";

// import { METHODS } from "http";
import React from "react";
import { useState } from "react";

const MyProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price) {
      alert("All fields are required!");
      return;
    }

    const res = await fetch("/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    });

    const data = await res.json();
    console.log(data.message);


   
    if (res.ok) {
      alert("Your product has been added");
      setName("");
      setPrice("");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <div className=" text-black border-black border-2    py-2  text-center m-2 ">
      <form className="m-2" onSubmit={handlesubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="product_name"
          className="border-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          className="border-2 p-1.5 m-2"
          // onClick={(e) => handlesubmit(e)}
        >
          Add item
        </button>
      </form>
    </div>
  );
};

export default MyProduct;
