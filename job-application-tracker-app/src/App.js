import React, { Component } from 'react';
import JobApplicationForm from './Components/JobApplicationForm';
import TrackerList from './Components/TrackerList';
import { DATA } from './shared/data';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }
  
  
  render () {

    return(
    <div className="App">
      <div className="App-header">
        <TrackerList list={this.state.data.map(item => item)}></TrackerList>
        <h5>Add New Tracking</h5>
        <JobApplicationForm></JobApplicationForm>
      </div>
    </div>)
  }
  
}

export default App;
