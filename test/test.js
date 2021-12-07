var assert = require("assert");
import todo from "../dist/parsegraph-font";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
