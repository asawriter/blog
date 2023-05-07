import { Schema, model, Types } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  avatar: { type: String },
  bio: { type: String },
  location: { type: String },
  joinDate: { type: Date, default: Date.now() },
  posts: [{ type: Types.ObjectId, ref: "Post" }],
  following: [{ type: Types.ObjectId, ref: "User" }],
  followers: [{ type: Types.ObjectId, ref: "User" }],
  comments: [{ type: Types.ObjectId, ref: "Comment" }],
  bookmarks: [{ type: Types.ObjectId, ref: "Post" }],
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = model("User", userSchema);

export default User;
