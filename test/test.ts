const assert = require("assert");
import Font from "../src/index";

describe("Font", function () {
  it("works", () => {
    assert.ok(new Font(18, "serif"));
  });
});
