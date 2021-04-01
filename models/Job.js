import mongoose from 'mongoose'
import { JobSchema } from '../schema/schema.js'

export const Job = mongoose.model('Job', JobSchema)