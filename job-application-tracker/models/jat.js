const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jatSchema = new Schema ({
    type: String, 
    company: String, 
    jobDescriptionUrl: String, 
    notes: String, 
    createdAt: Date, 
    updatedAt: Date, 
})

module.exports = mongoose.model('Jat', jatSchema)
