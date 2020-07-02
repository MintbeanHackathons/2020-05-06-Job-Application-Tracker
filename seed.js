const {db} = require('./server/db')

const JobApp = require('./server/db/models/JobApp')

const seedApps = [
  {
    type: 'Applied',
    company: 'Company A',
    jobDescriptionURL: 'https://www.indeed.com',
    notes: "test notes here",
    createdAt: null,
    updatedAt: null,
  },
  {
    type: 'Applied',
    company: 'Company B',
    jobDescriptionURL: 'https://www.indeed.com',
    notes: "test notes here",
    createdAt: null,
    updatedAt: null,
  },
  {
    type: 'Applied',
    company: 'Company C',
    jobDescriptionURL: 'https://www.indeed.com',
    notes: "test notes here",
    createdAt: null,
    updatedAt: null,
  },
  {
    type: 'Interview',
    company: 'Company D',
    jobDescriptionURL: 'https://www.indeed.com',
    notes: "test notes here",
    createdAt: null,
    updatedAt: null,
  },
  {
    type: 'Interview',
    company: 'Company E',
    jobDescriptionURL: 'https://www.indeed.com',
    notes: "test notes here",
    createdAt: null,
    updatedAt: null,
  },
]

const seed = async () => {
  await db.sync({force: true})

  await db.sync({force:true})

  await Promise.all(seedApps.map(app => {
    return JobApp.create(app)
  }))

  console.log('Seeding success!')
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
