const fs = require("fs");

const interpreter = require("./interpreter").interpreter;

describe("Factory Interpreter", () => {
  const AST_JSON = fs.readFileSync("src/ast_spec.json");
  const AST = JSON.parse(AST_JSON);

  describe("Assigment", () => {
    it("Interpret const string assignment", () => {
      const input = [AST.assignment.const];
      const interpreted = interpreter.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`const user = "Gabriel Romay";`);
    });

    // it("Interpret let assigment")
  });
});
