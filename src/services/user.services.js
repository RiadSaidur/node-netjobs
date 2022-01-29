import { User } from "../models/user.model.js"

export const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email })
    if(user) return user
    else return false
  } catch (error) {
    console.log(error.message)
    return false
  }
}

export const getUserProfile = (user) => {
  const userData = user.toJSON()
  delete userData.password
  return userData
}