import React, { useState, useEffect } from "react";
import SlideCard from "./SlideCard";
import { Container, Col, Row } from "react-bootstrap";

const SlideData = [
  {
    id: 2,
    imgsrc: "./assets/c1.jpg",
    imgsrc_overlay: "./assets/c11.jpg",
    title: "Brunch",
    data: "Here is Light salty chineese touch",
  },
  {
    id: 1,
    imgsrc_overlay: "./assets/c12.jpg",
    imgsrc: "./assets/c2.jpg",
    title: "Breakfast",
    data: "Try our special breakfast",
  },
  {
    id: 0,
    imgsrc_overlay: "./assets/c13.jpg",
    imgsrc: "./assets/c3.jpg",
    title: "Lunch",
    data: "Taste the italian likalu food",
  },
  {
    id: 3,
    imgsrc_overlay: "./assets/c14.jpg",
    imgsrc: "./assets/c4.jpg",
    title: "Dinner",
    data: "Mood for some tradional spicy ?",
  },
];

const SecondGrid = () => {
  const len = SlideData.length - 1;
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);

  const next = () => {
    setFirst(first >= len ? 0 : (prevState) => prevState + 1);
    setSecond(second >= len ? 0 : (prevState) => prevState + 1);
    setThird(third >= len ? 0 : (prevState) => prevState + 1);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      next();
    }, 3000);
    return () => clearTimeout(interval);
  }, [first, second, third]);

  return (
    <Container>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-around ">
          {SlideData.map((val) => val.id === first && <SlideCard val={val} />)}
          {SlideData.map((val) => val.id === second && <SlideCard val={val} />)}
          {SlideData.map((val) => val.id === third && <SlideCard val={val} />)}
        </div>
      </div>
    </Container>
  );
};

export default SecondGrid;
