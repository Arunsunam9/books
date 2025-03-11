"use client";

// import { METHODS } from "http";
import React from "react";
import { useState } from "react";

const MyProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");


   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0];
     console.log("e,target.file:", file);
     if (file) {
       setImage(file);
      
     }
   };



  // const handlesubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!name || !price || !description) {
  //     alert("All fields are required!");
  //     return;
  //   }

  //   const res = await fetch("/api/product/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, price, image:image , description}),
  //   });

  //   const data = await res.json();
  //   console.log(data.message);


   
  //   if (res.ok) {
  //     alert("Your product has been added");
  //     setName("");
  //     setPrice("");
  //     setImage(null);
  //     setDescription("");
  //   } else {
  //     alert("Error sending message");
  //   }
  // };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !description || !image) {
      alert("All fields are required, including the image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image); // Image file

    const res = await fetch("/api/product", {
      method: "POST",
      body: formData, // Send as FormData (no need for headers)
    });

    const data = await res.json();
    console.log(data.message);

    if (res.ok) {
      alert("Your product has been added");
      setName("");
      setPrice("");
      setImage(null);
      setDescription("");
    } else {
      alert("Error sending product");
    }
  };


  return (
    <div className=" text-black border-black border-2    py-2  text-center m-2 ">
      <form
        className="m-2"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          className="border-2"
          onChange={handleImageChange}
        />
        <br />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          className="border-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
