import React from "react";
import { Card, Button } from "react-bootstrap";

export default function SlideCard({ val }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img fluid variant="top" src={val.imgsrc} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{val.data}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
