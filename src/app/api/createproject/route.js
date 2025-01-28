import DatabaseConnection from "@/database";
import Project from "@/models/Project";
import { LogIn } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConnection();
    const { data } = await req.json();
    const project = await Project.create({
      ownerId: data.ownerId,
      project_name: data?.project_name,
      date: data?.date,
    });
    console.log(data, "data");

    if (project) {
      return NextResponse.json({
        message: "Project Created Successfully !",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Project Can't Created Try again !",
        success: false,
      });
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Something went wrong !",
      success: false,
    });
  }
}
