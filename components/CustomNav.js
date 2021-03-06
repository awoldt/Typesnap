import React from "react";
import { Navbar, Container } from "react-bootstrap";

const CustomNav = () => {
  return (
    <Navbar style={{ backgroundColor: "rgb(51, 162, 255)"}}>
      <Container style={{padding: '0px', marginLeft: '50px'}}>
        <Navbar.Brand href={"/"} style={{ color: "white", fontSize: "23px"}}>
          <img
            alt="typesnap logo"
            src="/favicon.ico"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          Typesnap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
