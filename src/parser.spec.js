const fs = require("fs");

const parser = require("./parser").parser;

describe("Factory Parser", () => {
  const AST_JSON = fs.readFileSync("src/ast_spec.json");
  const AST = JSON.parse(AST_JSON);

  describe("Assigment", () => {
    it("Parse const string assignment", () => {
      const input = `"user" box stores "Gabriel Romay".`;
      const parsed = parser.parse(input);
      console.log(input, "=>", parsed);
      expect(parsed).toEqual([AST.assignment.const]);
    });

    it("Parse let string assignment", () => {
      const input = `"user" opened box stores "Gabriel Romay".`;
      const parsed = parser.parse(input);
      console.log(input, "=>", parsed);
      expect(parsed).toEqual([AST.assignment.let]);
    });
  });
});
