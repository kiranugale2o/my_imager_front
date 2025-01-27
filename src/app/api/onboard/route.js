import DatabaseConnection from "@/database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await DatabaseConnection();
  try {
    // console.log(req);
    const { currentUser } = await req.json();
    if (!currentUser) {
      return NextResponse.json({
        message: "User Data is Required !",
        success: false,
      });
    }

    const user = await User.create(currentUser);
    await user.save();
    if (user) {
      const token = jwt.sign(
        { email: currentUser?.email, userId: user?._id },
        process.env.TOKEN_SECRET_KEY
      );
      return NextResponse.json({
        message: "Onboard Success !",
        success: true,
        token: token,
      });
    } else {
      return NextResponse.json({
        message: "Something went Wrong !",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Something went Wrong !",
      success: false,
    });
  }
}
