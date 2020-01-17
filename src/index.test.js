import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "./index";
import render from "riteway/render-component";
import test from "jest-t-assert";

test("FormattedMessage", t => {
  let $ = render(<FormattedMessage message="hello" />);
  t.deepEqual($("span").html(), "hello");

  $ = render(<FormattedMessage message="" />);
  t.deepEqual($("span").html(), "");

  $ = render(
    <FormattedMessage message="hello {foo}" values={{ foo: "world" }} />
  );
  t.deepEqual($("span").html(), "hello world");
});

test("FormattedHTMLMessage", t => {
  let $ = render(<FormattedHTMLMessage />);
  t.deepEqual($("span").html(), "");

  $ = render(<FormattedHTMLMessage message="heya" />);
  t.deepEqual($("span").html(), "heya");

  $ = render(<FormattedHTMLMessage message="foo" />);
  t.deepEqual($("span").html(), "foo");

  $ = render(
    <FormattedHTMLMessage
      message="hello {foo}, yo {bar}"
      values={{ foo: "world", bar: "chris" }}
    />
  );
  t.deepEqual($("span").html(), "hello world, yo chris");

  $ = render(
    <FormattedHTMLMessage
      message="hello {foo}, yo {bar}"
      foo="world"
      bar="chris"
    />
  );

  t.deepEqual($("span").html(), "hello world, yo chris");

  const element = render(<span>chris</span>);
  $ = render(
    <FormattedHTMLMessage
      message="hello {foo}, yo {bar}"
      foo="world"
      bar={element.html()}
    />
  );

  t.deepEqual($("span").html(), "hello world, yo <span>chris</span>");
});
