// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "Email and password are required" },
//         { status: 400 }
//       );
//     }

//     // Check if user already exists
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = await prisma.user.create({
//       data: { email, password: hashedPassword },
//     });

//     return NextResponse.json(
//       { message: "Signup successful", userId: user.id },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Signup Error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }






import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword, generateToken } from "@/utils/auth";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name  } = schema.parse(body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email ,
        password: hashedPassword,
        name : name || "No name",
      },
        
    });

    const token = generateToken({ userId: user.id, email: user.email , name: user.name , role: user.role });

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name , role: user.role },
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