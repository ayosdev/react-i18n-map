import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "./index";
import { render } from "@testing-library/react";
import { toContainHTML } from "@testing-library/jest-dom";

expect.extend({ toContainHTML });
describe("FormattedMessage", () => {
  test("return react component", () => {
    let { getByText } = render(<FormattedMessage message="hello" />);
    expect(getByText("hello")).toBeTruthy();
  });

  test("return blank message", () => {
    let { container } = render(<FormattedMessage message="" />);
    expect(container.querySelector("span").textContent).toBe("");
  });

  test("return interpolated message", () => {
    let { container, getByText } = render(
      <FormattedMessage message="hello {foo}" values={{ foo: "world" }} />
    );
    expect(getByText("hello world")).toBeTruthy();
  });
});

describe("FormattedHTMLMessage", () => {
  test("return blank message", () => {
    let { container } = render(<FormattedHTMLMessage />);
    expect(container.querySelector("span").textContent).toBe("");
  });

  it("allows us to set props", () => {
    const { getByText, rerender } = render(
      <FormattedHTMLMessage message="heya" />
    );
    expect(getByText("heya")).toBeTruthy();

    rerender(<FormattedHTMLMessage message="foo" />);
    expect(getByText("foo")).toBeTruthy();
  });

  test("return interpolated message", () => {
    let { getByText } = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        values={{ foo: "world", bar: "chris" }}
      />
    );
    expect(getByText("hello world, yo chris")).toBeTruthy();
  });

  test("return interpolated message with with normal props", () => {
    let { getByText } = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        foo="world"
        bar="chris"
      />
    );

    expect(getByText("hello world, yo chris")).toBeTruthy();
  });

  test("return interpolated message with with react element as props", () => {
    const element = <span>chris</span>;
    let { container, debug } = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        foo="world"
        bar={element}
      />
    );
    expect(container.querySelector("span")).toContainHTML(
      "<span>hello world, yo <span>chris</span></span>"
    );
  });
});
