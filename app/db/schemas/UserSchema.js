import mongoose from "mongoose"
import Course from './CourseSchema'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

//const User = mongoose.models.User || mongoose.model("User", userSchema);

export default mongoose.models.User || mongoose.model("User", userSchema) //User
