import { addNewUser } from "../services/auth.services.js";
import { getUserByEmail } from "../services/user.services.js";
import { getTokenAndProfile } from "../utils/user.utils.js";

export const signin = async (req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ error: 'Data not formated properly' })
  }

  try {
    const user = await getUserByEmail(email)
    if(!user) return res.status(400).json({ error: 'Invalid email or password' })

    const isAccepted = await user.comparePassword(password)
    if(!isAccepted) return res.status(400).json({ error: 'Invalid email or password' })

    const tokenAndProfile = getTokenAndProfile(user)
    res.status(200).json(tokenAndProfile)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: 'Unable to signin new user' })
  }
}

export const signup = async (req, res) => {
  const { name, email, password } = req.body

  if(!name || !email || !password) {
    return res.status(400).json({ error: 'Data not formated properly' })
  }

  try {
    const isUserExists = await getUserByEmail(email)
    if(isUserExists) return res.status(400).json({ error: 'User already exists' })

    const user = await addNewUser(name, email, password)
    if(!user) return res.status(500).json({ error: 'Unable to signup new user' })

    const tokenAndProfile = getTokenAndProfile(user)
    res.status(200).json(tokenAndProfile)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: 'Unable to signin new user' })
  }
}