import Express from 'express'
import { getAllJobs, getJobById } from '../../controller/jobController.js'
import { signin, signup } from '../../controller/auth.controller.js'

export const publicRoutes = Express.Router()

publicRoutes.get('/jobs', getAllJobs)
publicRoutes.get('/jobs/:id', getJobById)
publicRoutes.post('/auth/signin', signin)
publicRoutes.post('/auth/signup', signup)