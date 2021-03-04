import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import './Header.css'
export function Header() {
  return <ReactBootStrap.Navbar bg="dark" variant="dark" className="Header">
    <ReactBootStrap.Navbar.Brand href="#home">Quest for orb of Quarkus</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <Button variant="contained" color="primary" component={Link} to={'/startmap'}>New game</Button>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar>
}
