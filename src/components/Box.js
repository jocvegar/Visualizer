import React, { useState, useEffect } from "react";
import animalList from "../animal.json";
import BoxHeader from "./BoxHeader";

function Box() {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const colors = [
    "#9966CC",
    "#FAA08E",
    "#66CC66",
    "#207C9D",
    "#d8d341",
    "#CCCCFF",
    "#C19A6B",
    "#6082B6",
    "#C9CC3F",
  ];

  const getColor = () => {
    const i = Math.ceil(Math.random() * colors.length);
    setColor(colors[i]);
  };

  const getTitle = () => {
    const i = Math.floor(Math.random() * (animalList.length - 1));
    setTitle(animalList[i]);
  };

  const handleWordEnd = () => {
    getColor();
    getTitle();
  };

  useEffect(() => {
    getColor();
    getTitle();
    return function cleanup() {
      setColor("");
      setTitle("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="box" style={{ backgroundColor: color }}>
      <BoxHeader header={title} onWordEnd={handleWordEnd} />
    </div>
  );
}
export default Box;
