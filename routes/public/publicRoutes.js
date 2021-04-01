import Express from 'express'
import { getAllJobs, getJobById } from '../../controller/jobController.js'

export const publicRoutes = Express.Router()

publicRoutes.get('/jobs', getAllJobs)
publicRoutes.get('/jobs/:id', getJobById)