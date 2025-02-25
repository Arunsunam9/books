// import { NextResponse } from "next/server";
// // import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = req.body;
//     if (!name || !email || !phone || !message) {
//     }
//     NextResponse.json({ error: "All fields are required!" }, { status: 400 });

//     const contact = await prisma.contact.create({
//       data: {
//         name: name,
//         email: email,
//         phone: phone,
//         message: message,
//       },
//     });

//     return NextResponse.json({
//       message: "Contact submitted successfully",
//       contact,
//     });
//   } catch (error) {
//     console.log("Error in API Route:", error);
//     return NextResponse.json(
//       { error: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req: Request) {
//   try {
//     // Fetch all contacts from the database
//     const contacts = await prisma.contact.findMany();

//     // Return the data as JSON
//     return NextResponse.json({ success: true, data: contacts });
//   } catch (error) {
//     console.error("Error in GET:", error);

//     // Return error response
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch contacts." },
//       { status: 500 }
//     );
//   }
// }

// src/app/api/contact/route.ts

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client"; // Import PrismaClient

// const prisma = new PrismaClient(); // Instantiate Prisma Client

// export async function POST(req: Request) {
//   try {
//     const body = await req.json(); // Parse incoming JSON request

//     const { name, email, phone, message } = body;

//     // Save the contact data to Supabase (PostgreSQL)
//     const newContact = await prisma.contact.create({
//       data: {
//         name,
//         email,
//         phone,
//         message,
//       },
//     });

//     // Return a success response
//     return NextResponse.json(
//       { success: true, data: newContact },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error saving contact:", error);
//     return NextResponse.json(
//       { success: false, error: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req: Request) {
//   try {
//     // Fetch all contacts from Supabase
//     const contacts = await prisma.contact.findMany();

//     return NextResponse.json(
//       { success: true, data: contacts },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching contacts:", error);
//     return NextResponse.json(
//       { success: false, error: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// // import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/lib/prisma";

// // Helper function for validating the payload
// function validatePayload(body: any) {
//   if (!body || typeof body !== "object") {
//     throw new TypeError("Payload must be an object.");
//   }

//   const { name, email, phone, message } = body;

//   if (!name || !email || !message) {
//     throw new Error("Missing required fields: name, email, or message.");
//   }

//   // Optionally validate phone (if required)
//   if (phone && typeof phone !== "string") {
//     throw new Error("Invalid phone number format.");
//   }

//   return { name, email, phone, message };
// }

// // POST Handler
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // Validate payload
//     const validatedPayload = validatePayload(body);
//     console.log("Validated payload:", validatedPayload);

//     // Replace this with your database or business logic
//     const contact = await prisma.contact.create({
//       data: {
//         name: validatedPayload.name,
//         email: validatedPayload.email,
//         phone: validatedPayload.phone,
//         message: validatedPayload.message,
//       },
//     });
//     // For example:
//     // await saveContactToDatabase(validatedPayload);

//     return NextResponse.json({
//       success: true,
//       contact,
//       message: "Contact saved successfully",
//     });
//   } catch (error: any) {
//     console.error("Error in POST:", error.message);
//     return NextResponse.json(
//       { success: false, error: error.message || "Something went wrong!" },
//       { status: 400 }
//     );
//   }
// }

// // GET Handler (if applicable)
// export async function GET() {
//   try {
//     // Replace this with your logic to retrieve contacts (e.g., database query)
//     const contacts = [
//       {
//         id: 1,
//         name: "John Doe",
//         email: "johndoe@example.com",
//         message: "Hello",
//       },
//       {
//         id: 2,
//         name: "Jane Smith",
//         email: "janesmith@example.com",
//         message: "Hi there",
//       },
//     ];

//     return NextResponse.json({ success: true, data: contacts });
//   } catch (error: any) {
//     console.error("Error in GET:", error.message);
//     return NextResponse.json(
//       { success: false, error: error.message || "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }





import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();


// export default async function handler(req: Request, res: Response) {
export async function POST(req: Request) {

      try {
        const  body  = await req.json();
        const{ name, phone, email, message} = body;

        if (!name || !phone || !email || !message) {
         return NextResponse.json({message:"All fields are required !"})
        }
        console.log("Received contact from data", {name, phone, email, message})


        const newContact = await prisma.contact.create({
          data: { name, phone, email, message },
        });



        return NextResponse.json({ message:"Message received succesfully!"})
      }
        catch (error) {
          console.log(error)
          return NextResponse.json({message:"Internal server error"})
        }
}

