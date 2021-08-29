import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FirstGrid() {
  return (
    <>
      <Container className="d-sm-flex bg-dark text-light text-center text-sm-start py-4">
        <div className="my-auto">
          <h1>
            We Serve,
            <span className="text-warning"> above your expectations </span>
          </h1>
          <p className="lead mt-4" style={{ fontSize: "2.5vw" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            eius! Unde corporis
          </p>
          <button
            className="btn btn-warning btn-md mt-4 text-sm-center"
            style={{ borderRadius: "0px" }}
          >
            Visit Menu
          </button>
        </div>

        <div className="d-none d-sm-flex my-auto">
          <img className="img-fluid" src="./assets/1.png" alt="img" />
        </div>
      </Container>

      <Container className="d-sm-flex bg-warning justify-content-sm-around py-4">
        <h4 className="text-dark my-auto">Sign In for new meal deals</h4>
        <form action="#" id="form">
          <div className="form-control mt-3 mt-sm-auto d-flex bg-light">
            <input
              type="mobile number"
              placeholder="+92-xxx-xxxxxxx"
              className="form-control"
            />
            <button className="btn-warning btn-md">Submit</button>
          </div>
        </form>
      </Container>
    </>
  );
}
