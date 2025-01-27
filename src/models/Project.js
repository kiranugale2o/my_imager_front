import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  ownerId: {
    type: String,
    require: true,
  },
  projecct_name: {
    type: String,
    require: true,
  },
  projectUseStorage: {
    type: Number,
    require: true,
    default: 0,
  },
  date: {
    type: Number,
    require: true,
  },
  projectData: [
    {
      type: String,
    },
  ],
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
