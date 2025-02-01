"use server";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import cookie from "cookie";

import { headers } from "next/headers";
import { cookies } from "next/headers";
import { parse } from "cookie";
import DatabaseConnection from "@/database";
import User from "@/models/User";
import Project from "@/models/Project";
import { sendOnMyimager } from "myimager";

// export async function currentUser() {
//   // Await headers() to get the headers correctly
//   const headersList = headers(); // Await headers function
//   const cookieHeader = (await headersList).get("cookie") || ""; // Now await and get cookie header
//   const cookies = parse(cookieHeader); // Parse the cookie string

//   const myObject = cookies["myimager_user_access"];

//   if (myObject) {
//     try {
//       // jwt.verify is synchronous in the way you're using it, but it has a callback.
//       // You should use the promise-based API of `jwt.verify` for async/await usage
//       const decoded = await new Promise((resolve, reject) => {
//         jwt.verify(myObject, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
//           if (err) {
//             reject(err); // Reject on error
//           } else {
//             resolve(decoded); // Resolve with the decoded token
//           }
//         });
//       });

//       return decoded; // Return the decoded token if everything is valid
//     } catch (err) {
//       console.error(err); // Log any error
//       return null; // Return null in case of an error (invalid or expired token)
//     }
//   }

//   return null; // Return null if the "healthcare" cookie is not present
// }

export async function getUserDetails(id) {
  try {
    // Ensure that the database connection is established first
    await DatabaseConnection();

    // Query for a user by userId
    const user = await User.findOne({ userId: id });
    // If a user is found, return the user object as JSON
    if (user) {
      return JSON.parse(JSON.stringify(user));
    } else {
      return null; // Return null if no user is found
    }
  } catch (error) {
    console.error("Error retrieving user details:", error);
    return null;
  }
}

export async function getUserProjects(ownerId) {
  try {
    // Ensure that the database connection is established first
    await DatabaseConnection();

    // Query for projects based on the ownerId
    const projects = await Project.find({ ownerId: ownerId });

    // Check if projects are found
    if (projects.length > 0) {
      return JSON.parse(JSON.stringify(projects)); // Convert to plain JSON objects
    } else {
      return null; // Return null if no projects are found
    }
  } catch (error) {
    console.error("Error retrieving user projects:", error);
  }
}

export async function getProjectDetails(id) {
  await DatabaseConnection();
  const projects = await Project.findOne({ _id: id });
  if (projects) {
    return JSON.parse(JSON.stringify(projects));
  } else {
    return null;
  }
}

export async function getImage(file) {
  const res = await sendOnMyimager(file);
  console.log(res, "FFFfffff");

  return res;
}
