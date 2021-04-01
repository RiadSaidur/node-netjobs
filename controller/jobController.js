import { Job } from '../models/Job.js'

export const addNewJob = async (req, res) => {
  const {
    company_name,
    position,
    experience,
    salary,
    category
  } = req.body
  
  const newJob = new Job({
    company_name,
    position,
    experience,
    salary,
    category
  })

  try {
    const job = newJob.save()
    return res.status(201).json({ jobId: job._id })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
}

export const getAllJobs = async (req, res) => {
  const queryOptions = {}
  const query = req.query
  if(query.category) {
    const categories = query.category.split(',')
    queryOptions.category = {
      $in: categories
    }
  }
  if(query.salaryFrom && query.salaryTo) {
    queryOptions['salary.ammount'] = {
      $gte: query.salaryFrom,
      $lte: query.salaryTo
    }
  }
  if(query.experience) {
    queryOptions['experience.requiredExperience'] = {
      $lte: +query.experience
    }
  }
  
  try {
    const jobs = await Job.find(queryOptions).exec()
    res.status(200).json({ jobs })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
}

export const getJobById = async (req, res) => {
  const jobId = req.params.id
  try {
    const job = await Job.findById(jobId)
    res.status(200).json({ job })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
}