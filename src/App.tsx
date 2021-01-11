import React from "react";
import Sum from "./ts/Sum";

export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

function App() {
  return (
    <Sum />
  );
}

export default App;
