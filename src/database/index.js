import mongoose from "mongoose";
async function DatabaseConnection() {
  const Mongo_DB = process.env.DATABASE_LINK;

  mongoose
    .connect(process.env.DATABASE_LINK)
    .then(() => {
      console.log("connected");
    })
    .catch(() => {
      console.log("disconnected");
    });
}

export default DatabaseConnection;
