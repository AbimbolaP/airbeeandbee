import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
export async function POST(
  request: Request
)
  // { try 
   {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  return NextResponse.json(user);
// } catch (error) {
//   // Handle errors and return an appropriate response
//   console.error('Error creating user:', error);
//   return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
// } finally {
//   // Disconnect the Prisma client
//   await prisma.$disconnect();
// }
}
