import { createJWT } from "../services/auth.services.js"
import { getUserProfile } from "../services/user.services.js"

export const getTokenAndProfile = (user) => {
  const tokenAndProfile = {
    token: createJWT(user.email),
    profile: getUserProfile(user)
  }
  return tokenAndProfile
}