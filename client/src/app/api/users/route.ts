import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// ----------------- GET all users -----------------
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const email = searchParams.get('email')
  const name = searchParams.get('name')

  if (id) return getUserById(id)
  if (email) return getUserByEmail(email)
  if (name) return searchUsersByName(name)

  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

// ----------------- GET a single user by ID -----------------
export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  return NextResponse.json(user)
}

// ----------------- GET a single user by email -----------------
export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  return NextResponse.json(user)
}

// ----------------- GET a single user by first name -----------------
export async function getUserName(email: string) {
  const user = await prisma.user.findUnique({
    where: { firstName },
  })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
  return NextResponse.json(user)
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const newUser = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        eventLocation: body.eventLocation,
        eventDate: new Date(body.eventDate),
        guestCount: Number(body.guestCount),
        additionalDetails: body.additionalDetails,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error("POST /api/users error:", err);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// ----------------- UPDATE a user -----------------
export async function PUT(req: Request) {
  try {
    const body = await req.json();

    // Expecting the body to include the user's ID and fields to update
    const { id, firstName, lastName, email, phoneNumber, eventLocation, eventDate, guestCount, additionalDetails } = body;

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        eventLocation,
        eventDate: eventDate ? new Date(eventDate) : undefined,
        guestCount: guestCount ? Number(guestCount) : undefined,
        additionalDetails,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (err) {
    console.error("PUT /api/users error:", err);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// ----------------- DELETE a user -----------------
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (err) {
    console.error("DELETE /api/users error:", err);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

// ----------------- Example: Search users by name -----------------
export async function searchUsersByName(name: string) {
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  })
  return NextResponse.json(users)
}