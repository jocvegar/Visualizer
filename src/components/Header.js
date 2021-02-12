import React, { useState, useEffect } from "react";

function Header({ header, onWordEnd }) {
  const [letter, setLetter] = useState("");

  const wordLength = header.split("").length;

  const letterCycler = () => {
    header.split("").forEach((letter, i) => {
      setTimeout(() => {
        setLetter((prevState) => (prevState += letter));
        if (wordLength - 1 === i) {
          setTimeout(() => {
            onWordEnd();
            setLetter("");
          }, 1500);
        }
      }, i * 500);
    });
  };

  useEffect(() => {
    letterCycler();
    return function cleanup() {
      setLetter("");
    };
  }, [header]); // eslint-disable-line react-hooks/exhaustive-deps

  return <h5>{letter}</h5>;
}

export default Header;
