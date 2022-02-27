var assert = require("assert");
import Font from "../dist/parsegraph-font";

describe("Font", function () {
  it("works", () => {
    assert.ok(new Font(18, "serif"));
  });
});
