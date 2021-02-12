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
  }, [header]);

  return (
    <>
      <h4>{letter}</h4>
    </>
  );
}

export default Header;
