import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "./index";
import render from "../utils/render";

describe("FormattedMessage", () => {
  test("return react component", () => {
    let $ = render(<FormattedMessage message="hello" />);
    expect($("span").html()).toEqual("hello");
  });

  test("return blank message", () => {
    let $ = render(<FormattedMessage message="" />);
    expect($("span").html()).toBe("");
  });

  test("return interpolated message", () => {
    let $ = render(
      <FormattedMessage message="hello {foo}" values={{ foo: "world" }} />
    );
    expect($("span").html()).toEqual("hello world");
  });
});

describe("FormattedHTMLMessage", () => {
  test("return blank message", () => {
    let $ = render(<FormattedHTMLMessage />);
    expect($("span").html()).toEqual("");
  });

  it("allows us to set props", () => {
    let $ = render(<FormattedHTMLMessage message="heya" />);
    expect($("span").html()).toEqual("heya");

    $ = render(<FormattedHTMLMessage message="foo" />);
    expect($("span").html()).toEqual("foo");
  });

  test("return interpolated message", () => {
    let $ = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        values={{ foo: "world", bar: "chris" }}
      />
    );
    expect($("span").html()).toEqual("hello world, yo chris");
  });

  test("return interpolated message with with normal props", () => {
    let $ = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        foo="world"
        bar="chris"
      />
    );
    expect($("span").html()).toEqual("hello world, yo chris");
  });

  test("return interpolated message with with react element as props", () => {
    const element = <span>chris</span>;
    let $ = render(
      <FormattedHTMLMessage
        message="hello {foo}, yo {bar}"
        foo="world"
        bar={element}
      />
    );
    expect($("span").html()).toEqual("hello world, yo <span>chris</span>");
  });
});
