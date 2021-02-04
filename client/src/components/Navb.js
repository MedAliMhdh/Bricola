import React from 'react';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navb = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand>Bricola</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Form inline>
          <Button variant='outline-success'>
            <Link to='/register'>Register</Link>{' '}
          </Button>
          <Button variant='outline-success'>
            <Link to='/login'>Log In</Link>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navb;
