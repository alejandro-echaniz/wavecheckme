import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3 bg-dark text-white">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Link to="/about" className="text-white mr-3">
              About
            </Link>
            <span className="mr-3"> | </span>
            <a
              href="https://2022.bit.camp/"
              className="text-white focus-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitcamp 2022
            </a>
            <span className="mr-3"> | </span>
            <span>
              {" "}
              &copy; {new Date().getFullYear()} WaveCheck Me. All rights
              reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
