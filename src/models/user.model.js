import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { 
      type : String,
      required : true
    }, 
    email: { 
        type : String, 
        required : true,
        unique: true
    },
    password: {
      type: String,
      required: true
    }
  }, 
  { timestamps: true }
)

UserSchema.methods.comparePassword = async function (password) {
  const user = this
  try {
    const isAccepted = await bcryptjs.compare(password, user.password)
    return isAccepted
  } catch (error) {
    console.log(error.message)
    return false
  }
}

export const User = mongoose.model('User', UserSchema)