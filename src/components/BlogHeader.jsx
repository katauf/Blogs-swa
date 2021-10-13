import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const BlogHeader = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Azure Serverless Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Hem</Nav.Link>
          <Nav.Link href="#features">Skapa nytt inlägg</Nav.Link>
          <Nav.Link href="#pricing">Visa alla inlägg</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BlogHeader;
