import React from "react";
import { render, screen } from "@testing-library/react";
import App, { label } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();
  expect(1).toBe(1);
});

test("renders the heading", () => {
  render(<App />);
  
  const h1 = screen.getByTestId("h1_test");
  expect(h1).toBeInTheDocument();
});

test("renders the paragraphy", () => {
  render(<App />);
  
  const p = screen.getByTestId("p_test");
  expect(p).toHaveTextContent("Nice TDD");
});

test("generates a label", () => {
  const l = label('React');

  expect(l).toBe("Hello REACT");
});
