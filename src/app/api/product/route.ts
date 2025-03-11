// import React from "react";

// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, price } = body;
//     console.log("body:", body);

//     if (!name || !price) {
//       return NextResponse.json(
//         { message: " All fields are required" },
//         { status: 400 }
//       );
//     }
//     console.log("received contact from data", name, price);

//     const newProduct = await prisma.product.create({
//       data: { name, price: Number(price) },
//     });

//     return NextResponse.json(
//       { message: "Product added sucussfully!" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Error adding product" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     const products = await prisma.product.findMany();

//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { message: "Error fetching products" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse , NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadToCloudinary } from "@/lib/cloudinery";
// import formidable from "formidable";
// import fs from "fs/promises";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const body = await req.formData();
    // const { name, price, image, description } = body;
    const name = body.get("name") as string;
    const price = body.get("price") as string ;
      const description = body.get("description") as string;
      const image = body.get("image") as File;



    
    console.log("image:", image);

    // Validate that both name and price are provided
    if (!name || !price || !description || !image) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    // Log the received data (for debugging purposes)
    console.log("Received product data", { name, price, image, description });

    let imageUrl = null;
    if (image) {
    const cloudineryResult = await uploadToCloudinary(image) as {secure_url:string}; 
    imageUrl = cloudineryResult.secure_url;
    }


    // Create the new product in the database
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price), // Ensure price is a number
        image: imageUrl!,
        description,
      },
    });

    // Return a success message with status 201 (created)
    return NextResponse.json(
      { message: "Product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    // Log any errors that occur
    console.error("Error adding product:", error);

    // Return an internal server error message
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
