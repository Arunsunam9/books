import React from "react";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(req: Request) {
  try {
    const User = await prisma.user.findMany();

    return NextResponse.json({ success: true, data: User });
  } catch (error) {
    console.error("Error in GET:", error);

    
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts." },
      { status: 500 }
    );
  }
}
