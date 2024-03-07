import { useEffect, useState } from "react";

const TypeWriter = ({ text, delay }) => {
  const [currText, setCurrText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const timeout = () => {
      setCurrText((prevText) => prevText + text[currIndex]);
      setCurrIndex((prevIndex) => prevIndex + 1);
      // console.log(currText);
    };
    if (currIndex < text.length) {
      setTimeout(timeout, delay);
    }

    return () => clearTimeout(timeout);
  }, [delay, currText, currIndex]);

  return <span>{currText}</span>;
};

export default TypeWriter;
