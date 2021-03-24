import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
test("renders Login Page", () => {
  render(<Login />);
  const linkElement = screen.getByText(/로그인/i);
  expect(linkElement).toBeInTheDocument();
});
