import { render } from "@testing-library/react";
import React from "react";
import Card from "../../index";

describe("Card", () => {
  it("should render a card", () => {
    const { getByTestId } = render(<Card data-testid="card-test">hello</Card>);

    expect(getByTestId("card-test").tagName).toEqual("DIV");
  });

  it("should render card", () => {
    const { getByTestId } = render(
      <Card data-testid="card-test" id="id-here">
        hello
      </Card>
    );
    const element: HTMLDivElement = getByTestId("card-test");

    expect(element.tagName).toEqual("DIV");
    expect(element.getAttribute("id")).toEqual("id-here");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Card data-testid="card-test">{value}</Card>
    );

    const card: HTMLDivElement = getByTestId("card-test");

    expect(card.textContent).toEqual(value);
  });
});
