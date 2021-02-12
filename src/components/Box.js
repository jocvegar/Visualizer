import React, { useState, useEffect } from "react";
import animalList from "../animal.json";
import Header from "./Header";

function Box() {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const colors = ["#9966CC", "#FAA08E", "#66CC66", "#207C9D", "#d8d341"];

  const getColor = () => {
    const i = Math.floor(Math.random() * colors.length);
    setColor(colors[i]);
  };

  const getTitle = () => {
    const i = Math.floor(Math.random() * animalList.length);
    setTitle(animalList[i]);
  };

  const handleWordEnd = () => {
    getColor();
    getTitle();
  }

  useEffect(() => {
    getColor();
    getTitle();
  }, []);

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <Header header={title} onWordEnd={handleWordEnd}/>
    </div>
  );
}
export default Box;
