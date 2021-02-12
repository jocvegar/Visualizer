import React, { useState, useEffect } from "react";
import animalList from "../animal.json";
import Header from "./Header";


function Box() {
  const [color, setColor] = useState("");
  const [animal, setAnimal] = useState("");
  const colors = ["#9966CC", "#FAA08E", "#66CC66", "#207C9D", "#d8d341"];

  const getColor = () => {
    const i = Math.floor(Math.random() * colors.length);
    setColor(colors[i]);
  };
  const getAnimal = () => {
    const i = Math.floor(Math.random() * animalList.length);
    setAnimal(animalList[i]);
  };

  const handleWordEnd = () => {
    getColor();
    getAnimal();
  }

  useEffect(() => {
    getColor();
    getAnimal();
  }, []);

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <Header header = {animal} onWordEnd={handleWordEnd}/>
    </div>
  );
}
export default Box;
