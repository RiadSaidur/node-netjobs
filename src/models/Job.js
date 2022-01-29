import mongoose from 'mongoose'
import { JobSchema } from '../schema/jobSchema.js'

export const Job = mongoose.model('Job', JobSchema)