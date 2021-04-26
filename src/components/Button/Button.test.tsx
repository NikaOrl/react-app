import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Button title="test" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set a theme", () => {
    const { asFragment } = render(<Button title="test" theme="grey" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
