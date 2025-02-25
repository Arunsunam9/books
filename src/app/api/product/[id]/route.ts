import React from "react";

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function PUT(
  req: NextRequest,
  { params } : { params : { id: string } }
) {
  // console.log("params:", params);
  try {
    const productId = params?.id;

    if(!productId) {
      return NextResponse.json(
        { messsage : "Product ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, price } = body;

    if (!name || !price) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }



// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, price } = body;

//     if (!name || !price) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Create a new product
//     const newProduct = await prisma.product.create({
//       data: { name, price },
//     });

//     return NextResponse.json(newProduct, { status: 201 });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return NextResponse.json(
//       { message: "Error creating product" },
//       { status: 500 }
//     );
//   }
// }




    // Check if product exists
   
   
   
   
   
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Update product
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, price },
    });

    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Error updating product" },
      { status: 500 }
    );
  }
}




// DELETE request - Delete product by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;

    // Check if the product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Delete the product
    await prisma.product.delete({
      where: { id: productId },
    });

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Error deleting product" },
      { status: 500 }
    );
  }
}