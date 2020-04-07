import React, { Component } from "react";
import { Navbar, FormControl, Nav } from "react-bootstrap";
import styled from "styled-components";

class Navbars extends Component {
  state = {};
  render() {
    return (
      <NavWrapper>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src="movie.png" alt="" height="15px" />
          </Navbar.Brand>
          <form class="form-inline">
            <FormControl
              type="text "
              className="mr-sm-2 rounded-pill"
              placeholder="movie or theatre"
            />
          </form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Theatres">Theatre</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#profile">
                <i class="fas fa-user"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.div`
  background-color: #f39c12;
  Navbar.Brand {
    display: inline;
  }
`;

export default Navbars;
