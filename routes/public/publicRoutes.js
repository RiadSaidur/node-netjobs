import Express from 'express'
import { getAllJobs } from '../../controller/jobController.js'

export const publicRoutes = Express.Router()

publicRoutes.get('/jobs', getAllJobs)