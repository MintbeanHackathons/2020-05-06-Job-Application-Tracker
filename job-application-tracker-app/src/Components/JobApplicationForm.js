import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const JobApplicationForm = (props) => {
  return (
    <div className="container" id="trackerForm">
      <Form>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="companyName">Company Name</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input type="companyName" name="companyName" id="companyName" placeholder="Company Name you applied for" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="jobDescription">Job Description</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input type="jobDescription" name="jobDescription" id="jobDescription" placeholder="Enter name or link to position" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="hireProcess">Select Hiring Processes</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input type="select" name="hireProcess" id="hireProcess" multiple>
              <option>Introductionary email</option>
              <option>Online Development test</option>
              <option>Conference Interview</option>
              <option>In Person Interview</option>
              <option>Rejected</option>
              <option>Accepted/waiting for offer</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="notes">Notes</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input type="textarea" name="notes" id="notes" />
          </Col>

        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="createdAt">Created At</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input
              type="date"
              name="createdDate"
              id="createdAt"
              placeholder="date of creation"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Label for="updatedAt">Updated Ate</Label>
          </Col>
          <Col md={{ size: 10, offset: 1 }}>
            <Input
              type="date"
              name="updatedDate"
              id="updatedAt"
              placeholder="date of update"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 1 }}>
            <Button outline color="success" block>Save</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default JobApplicationForm;