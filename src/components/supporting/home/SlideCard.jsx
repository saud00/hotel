import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SlideCard({ val }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div style={{ height: "12rem" }}>
          <Card.Img
            fluid
            variant="top"
            className="w-100 h-100"
            src={val.imgsrc}
          />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{val.data}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
