import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { DATA } from '../shared/data';


class RenderTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }
  render () {

    return(

        <tr>
        <th scope="row">{this.state.data.map(item => item.id)}</th>
        <td>{this.state.data.map(item => item.company)}</td>
        <td>{this.state.data.map(item => item.jobDescriptionUrl)}</td>
        <td>{this.state.data.map(item => item.type)}</td>
        <td>{this.state.data.map(item => item.notes)}</td>
        <td>{this.state.data.map(item => item.createdAt)}</td>
        <td>{this.state.data.map(item => item.updatedAt)}</td>
      </tr>
    )
  }
}
  

const TrackerList = (props) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Job Description</th>
          <th>Hiring Process</th>
          <th>Notes</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        <RenderTable></RenderTable>
      </tbody>
    </Table>
  );
}

export default TrackerList;