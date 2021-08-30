import React from "react";
import SlideCard from "./SlideCard";
import { Container, Col, Row } from "react-bootstrap";

const SlideData = [
  {
    imgsrc: "./assets/c1.jpg",
    data: "Try our special breakfast",
  },
  {
    imgsrc: "./assets/c2.jpg",
    data: "Taste the italian likalu food",
  },
  {
    imgsrc: "./assets/c3.jpg",
    data: "Mood for some tradional spicy ?",
  },
  {
    imgsrc: "./assets/c4.jpg",
    data: "Here is Light salty chineese touch",
  },
];

const SecondGrid = () => {
  return (
    <Container fluid className="mt-3">
      <Row xs={1} md={2} lg={3} className="g-4">
        {SlideData.map((val) => {
          return <Col>{<SlideCard val={val} />}</Col>;
        })}
      </Row>
    </Container>
  );
};

export default SecondGrid;
