import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Input from "../../index";

describe("Input", () => {
  it("should render a input", () => {
    const { getByTestId } = render(<Input data-testid="input-test" />);

    expect(getByTestId("input-test").tagName).toEqual("INPUT");
  });

  it("should render input with name", () => {
    const { getByTestId } = render(
      <Input data-testid="input-test" onClick={() => {}} name="name-here" />
    );
    const element = getByTestId("input-test");

    expect(element.tagName).toEqual("INPUT");
    expect(element.getAttribute("name")).toEqual("name-here");
  });

  it("must react to the onChange event", () => {
    const { getByTestId } = render(<Input data-testid="input-test" />);
    const value = "hello";

    const input: HTMLInputElement = getByTestId("input-test");

    fireEvent.change(input, { target: { value } });

    expect(input.value).toBe(value);
  });
});
