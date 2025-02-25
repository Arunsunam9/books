// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();
// const JWT_SECRET = process.env.JWT_SECRET as string; // Ensure JWT_SECRET is defined

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "Email and password are required" },
//         { status: 400 }
//       );
//     }

//     // Find user by email
//     const user = await prisma.user.findUnique({ where: { email } });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return NextResponse.json(
//         { error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     return NextResponse.json({ token }, { status: 200 });
//   } catch (error) {
//     console.error("Login Error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword, generateToken } from "@/utils/auth";
import { z } from "zod";
import { Role } from "@prisma/client";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});



export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = schema.parse(body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Secure password comparison with error handling
    let isValid = false;
    try {
      isValid = await comparePassword(password, user.password);
    } catch (err) {
      return NextResponse.json(
        { error: "An error occurred during authentication" },
        { status: 500 }
      );
    }

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = generateToken({ userId: user.id, email: user.email , name: user.name , role: user.role });

    
    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name ?? "No Name", // Default if name is null/undefined
        role: user.role, // Include the role here
      },
      token,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
