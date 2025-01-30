// import mongoose from "mongoose";
// async function DatabaseConnection() {
//   const Mongo_DB = process.env.DATABASE_LINK;

//   mongoose
//     .connect(
//       "mongodb+srv://ugalekiran29:o98nm12JL1i7TyoI@cluster0.pniravn.mongodb.net/myimager"
//     )
//     .then(() => {
//       console.log("connected");
//     })
//     .catch(() => {
//       console.log("disconnected");
//     });
// }

// export default DatabaseConnection;

import mongoose from "mongoose";

export default async function DatabaseConnection() {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://ugalekiran29:o98nm12JL1i7TyoI@cluster0.pniravn.mongodb.net/myimager",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
