import React from "react";
import Card from "../supporting/home/SlideCard";
import FirstGrid from "../supporting/home/FirstGrid";
import SecondGrid from "../supporting/home/SecondGrid";
import SlideData from "../supporting/home/SlideData";

export default function Homepage() {
  return (
    <div>
      <FirstGrid />
      <SecondGrid SlideData={SlideData} />
    </div>
  );
}
