import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"

export const createJWT = (email) => {
  const JWTKey = process.env.JWT_KEY
  return jwt.sign({ email }, JWTKey)
}

export const getHashedPassowrd = async (password) => {
  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)

  return hashedPassword
}

export const addNewUser = async (name, email, password) => {
  try {
    const hashedPassword = await getHashedPassowrd(password)
    return await User.create({ name, email, password: hashedPassword })
  } catch (error) {
    console.log(error.message)
    return false
  }
}