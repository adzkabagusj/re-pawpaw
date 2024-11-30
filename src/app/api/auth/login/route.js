const connectDB = require("../../../../../config/db");
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "@/models/Auth";

export async function POST(req) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { email, password, rememberMe } = await req.json();

    // Find user by email
    const user = await Auth.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: rememberMe ? "30d" : "1h",
      }
    );

    // Set cookie with token
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email,
          userId: user._id,
        },
      },
      { status: 200 }
    );

    // Set HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      // secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: rememberMe ? 30 * 24 * 60 * 60 : 60 * 60, // 30 days or 1 hour
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
