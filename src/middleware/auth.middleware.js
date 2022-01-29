import jwt from "jsonwebtoken";

const getEmailFromToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_KEY)
  return decodedToken.email
}

export const auth_required = (req, res, next) => {
  try {
    const headers = req.headers
    if(!headers.authorization) return res.status(401).json({ error: 'Access denined: Unauthoriozed' })

    const token = headers.authorization.split(' ')[1]
    const email = getEmailFromToken(token)
    if(!email) return res.status(401).json({ error: 'Access denined: Unauthoriozed' })
    
    req.user = email
    next()
  } catch (error) {
    console.log(error.message)
    return res.status(401).json({ error: 'Access denined: Unauthoriozed' })
  }
}