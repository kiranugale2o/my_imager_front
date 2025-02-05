import mongoose from "mongoose";

const JoinSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Joinus = mongoose.models.Joinus || mongoose.model("Joinus", JoinSchema);
export default Joinus;
