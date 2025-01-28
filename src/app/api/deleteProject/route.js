import DatabaseConnection from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await DatabaseConnection();
    const { id } = await req.json();
    const deleteProject = await Project.findByIdAndDelete(id);
    if (!deleteProject) {
      console.log("No Project found with that ID.");
      return NextResponse.json({
        message: "Project Not Deleted Try Again!",
        success: false,
      });
    } else {
      return NextResponse.json({
        message: "Project Deleted Successfully!",
        success: true,
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
