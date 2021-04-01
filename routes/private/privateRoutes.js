import Express from 'express'
import { addNewJob } from '../../controller/jobController.js'

export const privateRoutes = Express.Router()

privateRoutes.post('/job', addNewJob)