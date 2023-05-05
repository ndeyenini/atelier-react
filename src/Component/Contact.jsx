/** @format */

import "./contact.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function contat() {
  return (
    <Form>
      <div className='container-fluid' id='contact'>
        <h1 className='text-dark'>MY Contact</h1>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder='Message' />
            </Form.Group>
          </div>
        </div>
        <div className='text-center'>
          <Button variant='primary' type='submit' className='w-50'>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default contat;
