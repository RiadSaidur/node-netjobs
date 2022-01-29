import mongoose from 'mongoose'

export const JobSchema = mongoose.Schema({
  company_name: {
    type: String,
    min: 3,
    max: 100,
    required: true
  },
  position: {
    type: String,
    min: 3,
    max: 100,
    required: true
  },
  experience: {
    needExperience: {
      type: Boolean,
      required: true
    },
    requiredExperience: {
      type: Number,
      required: true
    }
  },
  salary: {
    negotiable: {
      type: Boolean,
      required: true
    },
    ammount: {
      type: Number,
      min: 1000,
      required: false
    }
  },
  category: [{
    type: String,
    min: 3,
    max: 20,
    required: true
  }]
})