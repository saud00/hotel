import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SlideCard({ val }) {
  return (
    <div>
      <Card className="card" style={{ width: "18rem" }}>
        <div style={{ height: "12rem" }}>
          <Card.Img
            fluid
            variant="top"
            className="w-100 h-100 z-index-1"
            src={val.imgsrc}
            loading="eager"
          />
        </div>
        <div className="img-overlay">
          <img
            src={val.imgsrc_overlay}
            alt="overlayimage"
            className="w-100 h-100"
            loading="lazy"
          />
          <div className="btn btn-light btn-lg overlay-btn">hello</div>
        </div>
        <Card.Body>
          <Card.Title>{val.title}</Card.Title>
          <Card.Text>{val.data}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
