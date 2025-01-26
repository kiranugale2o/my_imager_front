import DatabaseConnection from "@/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await DatabaseConnection();
  try {
    // console.log(req);
    const { currentUser } = await req.json();
    console.log("serverdata", currentUser);

    return NextResponse.json({
      message: "Ok !",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Something went Wrong !",
      success: false,
    });
  }
}
