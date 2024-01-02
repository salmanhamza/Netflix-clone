// backend/models/userModel.mjs
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

// Hash the password before saving to the database
userSchema.pre("save", async function () {
  try {
    const { password } = this;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
});

// Compare the entered password with the hashed password in the database
userSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw error;
  }
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
