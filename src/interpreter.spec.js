const fs = require("fs");

const interpreter = require("./interpreter").interpreter;

describe("Factory Interpreter", () => {
  const AST_JSON = fs.readFileSync("src/ast_spec.json");
  const AST = JSON.parse(AST_JSON);

  describe("Assignment", () => {
    it("Interpret const string assignment", () => {
      const input = [AST.assignment.const];
      const interpreted = interpreter.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`const user = "Gabriel Romay";`);
    });

    it("Interpret let string assignment", () => {
      const input = [AST.assignment.let];
      const interpreted = interpreter.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`let user = "Gabriel Romay";`);
    });
  });

  describe("Call Function", () => {
    it("Console Log with single arg", () => {
      const input = [AST.call.singleArg];
      const interpreted = interpreter.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`console.log(message);`);
    });

    /* it("Console Log with 2 args", () => {
      const input = [AST.call.multiArgs];
      const interpreted = interpreter.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`console.log(message, counter);`);
    }); */
  });
});
