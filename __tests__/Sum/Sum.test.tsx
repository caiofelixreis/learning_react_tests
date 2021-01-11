import React from "react";
import Sum from "../../src/ts/Sum";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("should render and sum", () => {
  const {getByTestId} = render(<Sum />);

  expect(getByTestId("test-h1")).toHaveTextContent("Sum");

  const p = getByTestId("test-p");
  const button: any = getByTestId("test-button");

  expect(p).toHaveTextContent('0');
  fireEvent.click(button);
  expect(p).toHaveTextContent('1');

});

export {};
