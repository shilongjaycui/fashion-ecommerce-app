import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("Index Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    act(() => {
      ReactDOM.render(<App />, div);
    });
    expect(div.innerHTML).toContain("Hello, world!"); // Replace with your expected content
    ReactDOM.unmountComponentAtNode(div);
  });

  // Optionally, you can also test using render from @testing-library/react
  it("renders App component", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hello, world!/i); // Replace with your expected content
    expect(linkElement).toBeInTheDocument();
  });
});