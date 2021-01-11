import React, { useState } from "react";

interface IProps {
  n1: number;
  n2: number;
}

const Sum = () => {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };
  
  return (
    <div>
      <h1 data-testid="test-h1">Sum</h1>
      <p data-testid="test-p">{number}</p>
      <button data-testid="test-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Sum;
