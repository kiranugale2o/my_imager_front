import DatabaseConnection from "@/database";
import Joinus from "@/models/Joinus";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConnection();
    const { data } = await req.json();
    const joinus = await Joinus(data);
    await joinus.save();
    if (joinus) {
      return NextResponse.json({
        success: true,
        message: "we send a message !",
      });
    } else {
      console.log("okk");

      return NextResponse.json({
        success: false,
        message: "somthing wrong  !",
      });
    }
  } catch (error) {
    console.log("errrrr", error);

    return NextResponse.json({
      success: false,
      message: "somthing wrong  !",
    });
  }
}
