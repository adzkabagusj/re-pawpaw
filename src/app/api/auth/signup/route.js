const connectDB = require("../../../../../config/db");
import Auth from "@/models/Auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { username, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await Auth.findOne({
      $or: [{ email }],
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new Auth({
      username,
      email,
      password: hashedPassword,
      user_id: `user_${Date.now()}`, // Generate unique user ID
    });

    // Save user to database
    await newUser.save();

    // Return success response
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          username: newUser.username,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
