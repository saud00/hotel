import React from "react";
import Card from "../supporting/home/SlideCard";
import FirstGrid from "../supporting/home/FirstGrid";
import SecondGrid from "../supporting/home/SecondGrid";
import { Container, Col, Row } from "react-bootstrap";

export default function Homepage() {
  return (
    <div>
      <FirstGrid />

      <SecondGrid />
    </div>
  );
}
