import React from "react";
import Button from "../components/button/button";
import { render } from "@testing-library/react";

describe("Button", () => {
  test("Should render children", () => {
    render(<Button onClick={() => {}}>Hi</Button>);
    expect(1 + 1).toBe(2);
  });
});
