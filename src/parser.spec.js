const fs = require("fs");

const t = require("./parser").parser;

describe("Factory Parser", function () {
  const AST_JSON = fs.readFileSync("src/ast_spec.json");
  const AST = JSON.parse(AST_JSON);

  describe("Assigment", function () {
    it("Parse const string assignment", () => {
      const input = `"user" box stores "Gabriel Romay".`;
      const parsed = t.parse(input);
      console.log(input, "=>", parsed);
      expect(parsed).toEqual([AST.assigment]);
    });

    /* it("Interpret const string assignment", function () {
      expect(
        t.interpret([AST.assigment]).toEqual(`const user = "Gabriel Romay";`)
      );
    }); */

    // it("Parse let assigment")
  });
});
