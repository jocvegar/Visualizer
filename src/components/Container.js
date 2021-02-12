import React, { useState } from "react";
import Box from "./Box";

function Container() {
  const [rowNumber, setRowNumber] = useState(4);
  const [columnNumber, setColumnNumber] = useState(4);
  const selectOptions = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  ];

  var totalBoxes = [...Array(rowNumber*columnNumber).keys()];

  const gridStyle = {
    gridTemplateColumns: `repeat(${columnNumber}, 1fr)`,
    gridTemplateRows: `repeat(${rowNumber}, 1fr)`,
  }

  return (
    <>
    <select
        value={rowNumber}
        onChange={(e) => setRowNumber(e.target.value)}
      >
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>

    <select
        value={columnNumber}
        onChange={(e) => setColumnNumber(e.target.value)}
      >
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
    
    <div id="container" style={gridStyle}>
      {totalBoxes.map((index) => {
        return <Box key={index} />;
      })}
    </div>
    </>
  );
}

export default Container;
