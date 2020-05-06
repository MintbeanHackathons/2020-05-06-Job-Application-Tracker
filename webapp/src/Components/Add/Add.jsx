import React from 'react'
import { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 600
  },
  spacing: {
    margin: theme.spacing(1)
  },
  buttons: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
}))

function Add() {
  const classes = useStyles()
  const [data, setData] = useState({
    id: null,
    progress: null,
    company: null,
    jobDescription: null,
    notes: null,
    createdAt: null,
    updatedAt: null
  })
  const progressOptions = [
    'Applied',
    'PhoneInterviewScheduled',
    'PhoneInterviewComplete',
    'InPersonInterviewScheduled',
    'InPersonInterviewComplete',
    'OfferReceived',
    'Rejected'
  ]
  const [retrievedData, setRetrievedData] = useState([])
  const [timestamp, setTimestamp] = useState()

  useEffect(() => {
    let localStorageData = localStorage.getItem('data')

    if (localStorageData) setRetrievedData(JSON.parse(localStorageData))
    else localStorage.setItem('data', JSON.stringify(retrievedData))
  }, [])

  const handleProgressChange = (e) => {
    setData({
      ...data,
      progress: e.target.value
    })
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = () => {

    let copy = retrievedData
    copy.push(data)
    setRetrievedData(copy)

    localStorage.setItem('data', JSON.stringify(retrievedData))
  }

  return(
    <div className={classes.body}>
      <Paper elevation={3} className={classes.flexCenter}>
        <FormControl className={classes.spacing}>
          <InputLabel>Progress</InputLabel>
          <Select
            id='Progress'
            native
            value={data.progress}
            label='Progress'
            onChange={handleProgressChange}
            variant='outlined'
          >
            <option aria-label='Not selected' value='Not selected' />
            {progressOptions && progressOptions.map(cat => (
              <option key={progressOptions.indexOf(cat)} value={cat}>{cat}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.spacing}>
          <TextField
            id='company'
            label='Company'
            onChange={handleInputChange}
            variant='outlined'
          />
        </FormControl>
        <FormControl className={classes.spacing}>
          <TextField
            id='jobDescription'
            label='JobDescription'
            onChange={handleInputChange}
            variant='outlined'
          />
        </FormControl>
        <FormControl className={classes.spacing}>
          <TextField
            id='notes'
            label='Notes'
            onChange={handleInputChange}
            multiline
            rows={5}
            variant='outlined'
          />
        </FormControl>
        <FormControl className={classes.buttons}>
          <Button variant='text' color='secondary' onClick={handleSubmit}>
            Cancel
          </Button>
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Add offer
          </Button>
        </FormControl>
      </Paper>
    </div>
  )
}

export default Add
