import React from 'react'
import { connect } from 'react-redux'
import { addingJobApp } from '../reducers/jobAppReducer'

class Form extends React.Component {
  constructor(props) {
    super (props)

    this.state={
      type: '',
      company: '',
      jobDescriptionURL: '',
      notes: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
          <h2>Add New Application</h2>
          <p className='formField'>
            <label htmlFor='type'>Type: </label>
            <input type='text' name='type' value={this.state.type} onChange={this.handleChange}/>
          </p>
          <p className='formField'>
            <label htmlFor='company'>Company: </label>
            <input type='text' name='company' value={this.state.company} onChange={this.handleChange}/>
          </p>
          <p className='formField'>
            <label htmlFor='jobDescriptionURL'>Job Description URL: </label>
            <input type='text' name='jobDescriptionURL' onChange={this.handleChange}/>
          </p>
          <p className='formField'>
            <label htmlFor='notes'>Notes: </label>
            <textarea id='textArea' rows='10' name='notes' onChange={this.handleChange}/>
          </p>
          <button type='submit'>Submit</button>
        </form>
    )
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addingJobApp(this.state)
    this.setState({
      type: '',
      company: '',
      jobDescriptionURL: '',
      notes: ''
    })
    let textArea=document.getElementById('textArea')
    textArea.value=''
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}

const mapDispatch = (dispatch) => {
  return {
    addingJobApp: (state) => dispatch(addingJobApp(state)),
  }
}

export default connect(null, mapDispatch)(Form)
