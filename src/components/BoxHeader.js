import React, { useState, useEffect } from "react";

function BoxHeader({ header, onWordEnd }) {
  const [letter, setLetter] = useState("");

  useEffect(() => {
    const headerLength = header.split("").length;

    header.split("").forEach((letter, i) => {
      setTimeout(() => {
        setLetter((prevState) => (prevState += letter));
        if (headerLength - 1 === i) {
          setTimeout(() => {
            onWordEnd();
            setLetter("");
          }, 1500);
        }
      }, i * 500);
    });

    return function cleanup() {
      setLetter("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header]);

  return <h5>{letter}</h5>;
}

export default BoxHeader;
