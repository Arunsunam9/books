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

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// // UPDATE API to edit a product by ID
// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   console.log("params:", params);
//   try {
//     const productId = params.id;
  

//     const body = await req.json();
//     const { name, price } = body;

//     if (!name || !price) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Check if product exists
//     const existingProduct = await prisma.product.findUnique({
//       where: { id: productId },
//     });
//     if (!existingProduct) {
//       return NextResponse.json(
//         { message: "Product not found" },
//         { status: 404 }
//       );
//     }

//     // Update product
//     await prisma.product.update({
//       where: { id: productId },
//       data: { name, price },
//     });

//     return NextResponse.json(
//       { message: "Product updated successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating product:", error);
//     return NextResponse.json(
//       { message: "Error updating product" },
//       { status: 500 }
//     );
//   }
// }

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

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON request body
    const body = await req.json();
    const { name, price } = body;

    // Validate that both name and price are provided
    if (!name || !price) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    // Log the received data (for debugging purposes)
    console.log("Received product data", { name, price });

    // Create the new product in the database
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price), // Ensure price is a number
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