import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export const UserSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', async next => {
  const user = this
  const hash = await bcrypt.hash(user.password, 10)
  
  user.password = hash
  
  next()
})

UserSchema.methods.isValidPassword = async password => {
  const user = this
  const compare = await bcrypt.compare(password, user.password)

  return compare
}