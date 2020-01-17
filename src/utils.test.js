import { template } from "./utils";
import React from "react";
import test from "jest-t-assert";

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
  const element = <span>test</span>;
  t.deepEqual(
    template("hello {foo}", {}, { foo: element }),
    "hello <span>test</span>"
  );
});
