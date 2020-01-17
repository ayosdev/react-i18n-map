import { template } from "./utils";
import React from "react";
import test from "jest-t-assert";
import render from "riteway/render-component";

test("template", t => {
  t.deepEqual(typeof template, "function");
  t.deepEqual(template(""), "");
  t.deepEqual(template("hello"), "hello");
  t.deepEqual(template("hello {foo}", { foo: "world" }), "hello world");
  t.deepEqual(template("hello {   foo   }", { foo: "world" }), "hello world");
  t.deepEqual(template("hello world", "test"), "hello world");
  t.deepEqual(template("hello {foo}", {}, { foo: "world" }), "hello world");
  t.deepEqual(
    template("hello {foo}", { foo: "test" }, { foo: "world" }),
    "hello test"
  );
  const element = render(<span>test</span>);
  t.deepEqual(
    template("hello {foo}", {}, { foo: element("body").html() }),
    "hello <span>test</span>"
  );
});
