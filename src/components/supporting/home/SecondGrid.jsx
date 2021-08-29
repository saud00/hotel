import React from "react";
import SlideCard from "./SlideCard";
import SlideData from "./SlideData";
import { Container } from "react-bootstrap";

const SecondGrid = () => {
  return SlideData.map((val) => {
    return <Container>{<SlideCard val={val} />} </Container>;
  });
};

export default SecondGrid;
