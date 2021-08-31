import React, { useState, useEffect } from "react";
import SlideCard from "./SlideCard";
import { Container, Col, Row } from "react-bootstrap";

const SlideData = [
  {
    id: 0,
    imgsrc: "./assets/c1.jpg",
    data: "Here is Light salty chineese touch",
  },
  {
    id: 1,
    imgsrc: "./assets/c2.jpg",
    data: "Try our special breakfast",
  },
  {
    id: 2,
    imgsrc: "./assets/c3.jpg",
    data: "Taste the italian likalu food",
  },
  {
    id: 3,
    imgsrc: "./assets/c4.jpg",
    data: "Mood for some tradional spicy ?",
  },
];

// SlideData.forEach((val) => {
//   if (val.id === 0 || val.id === 1 || val.id === 2) {
//     slideArr.push(val);
//   }
// });

const SecondGrid = () => {
  const len = SlideData.length - 1;
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(1);
  let [third, setThird] = useState(2);
  let [slideNum, setSlideNum] = useState([0, 1, 2]);
  const [slideArr, setSlideArr] = useState([
    {
      id: 0,
      imgsrc: "./assets/c1.jpg",
      data: "Here is Light salty chineese touch",
    },
    {
      id: 1,
      imgsrc: "./assets/c2.jpg",
      data: "Try our special breakfast",
    },
    {
      id: 2,
      imgsrc: "./assets/c3.jpg",
      data: "Taste the italian likalu food",
    },
  ]);

  const next = () => {
    setFirst(first >= len ? 0 : (prevState) => prevState + 1);
    setSecond(second >= len ? 0 : (prevState) => prevState + 1);
    setThird(third >= len ? 0 : (prevState) => prevState + 1);

    setSlideNum([first, second, third]);
    console.log("second");

    const arr = [...slideArr];

    console.log(slideNum);
    slideNum.forEach((val, key1) => {
      SlideData.forEach((value, key) => {
        if (key === val) {
          slideArr.splice(key1, 1, value);
          // arr[key1] = value;
          // console.log(arr);
          // setSlideArr(arr);
          console.log(slideArr);
        }
      });
    });
  };

  // useEffect(() => {
  //   next();
  // }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      next();
    }, 3000);
    return () => clearTimeout(interval);
  }, [first, second, third]);

  // const createArr = () => {
  //   let output = [];
  //   SlideData.forEach((val) => {
  //     if (val.id === first || val.id === second || val.id === third) {
  //       output.push(val);
  //     }
  //   });
  //   slideArr = output;
  //   console.log(slideArr);
  // };

  // slideArr = SlideData.filter((val, key) => slideNum.includes(key));

  return (
    <Container>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-around ">
          {slideArr.map((val) => (
            <SlideCard val={val} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SecondGrid;
