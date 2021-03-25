import { render, screen } from "@testing-library/react";
import LoginFrom from "./LoginForm";

interface User {
  id?: string;
  password?: string;
}

test("renders Login Page", () => {
  const user: User = { id: "test", password: "password" };
  render(<LoginFrom {...user}></LoginFrom>);
  //   const linkElement = screen.getByPlaceholderText(/password/i);
  const loginElement = screen.getByText(/로그인/i);
  expect(loginElement).toBeInTheDocument();
});

// test("render and get user api", () => {
//   const user: User = { id: "test", password: "password" };
//   render(<LoginFrom {...user}></LoginFrom>);
// });
