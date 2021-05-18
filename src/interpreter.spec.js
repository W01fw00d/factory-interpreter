var t = require("./interpreter").interpreter;

const fs = require("fs");

var is = function (input, type) {
  return Object.prototype.toString.call(input) === "[object " + type + "]";
};

// takes an AST and replaces type annotated nodes with raw values
var unannotate = function (input) {
  if (is(input, "Array")) {
    if (input[0] === undefined) {
      return [];
    } else if (is(input[0], "Array")) {
      return [unannotate(input[0])].concat(unannotate(input.slice(1)));
    } else {
      return unannotate(input[0]).concat(unannotate(input.slice(1)));
    }
  } else {
    return [input.value];
  }
};

describe("Factory Interpreter", function () {
  const AST_JSON = fs.readFileSync("src/ast_spec.json");
  const AST = JSON.parse(AST_JSON);

  describe("Assigment", function () {
    it("Interpret const string assignment", function () {
      const input = [AST.assigment];
      const interpreted = t.interpret(input);
      console.log(input, "=>", interpreted);
      expect(interpreted).toEqual(`const user = "Gabriel Romay";`);
    });

    // it("Interpret let assigment")
  });

  /* describe("parse", function () {
    xit("should lex a single atom", function () {
      expect(t.parse("a").value).toEqual("a");
    });

    xit("should lex an atom in a list", function () {
      expect(unannotate(t.parse("()"))).toEqual([]);
    });

    xit("should lex multi atom list", function () {
      expect(unannotate(t.parse("(hi you)"))).toEqual(["hi", "you"]);
    });

    xit("should lex list containing list", function () {
      expect(unannotate(t.parse("((x))"))).toEqual([["x"]]);
    });

    xit("should lex list containing list", function () {
      expect(unannotate(t.parse("(x (x))"))).toEqual(["x", ["x"]]);
    });

    xit("should lex list containing list", function () {
      expect(unannotate(t.parse("(x y)"))).toEqual(["x", "y"]);
    });

    xit("should lex list containing list", function () {
      expect(unannotate(t.parse("(x (y) z)"))).toEqual(["x", ["y"], "z"]);
    });

    xit("should lex list containing list", function () {
      expect(unannotate(t.parse("(x (y) (a b c))"))).toEqual([
        "x",
        ["y"],
        ["a", "b", "c"],
      ]);
    });

    describe("atoms", function () {
      xit("should parse out numbers", function () {
        expect(unannotate(t.parse("(1 (a 2))"))).toEqual([1, ["a", 2]]);
      });
    });
  });

  describe("interpret", function () {
    describe("lists", function () {
      xit("should return empty list", function () {
        expect(t.interpret(t.parse("()"))).toEqual([]);
      });

      xit("should return list of strings", function () {
        expect(t.interpret(t.parse('("hi" "mary" "rose")'))).toEqual([
          "hi",
          "mary",
          "rose",
        ]);
      });

      xit("should return list of numbers", function () {
        expect(t.interpret(t.parse("(1 2 3)"))).toEqual([1, 2, 3]);
      });

      xit("should return list of numbers in strings as strings", function () {
        expect(t.interpret(t.parse('("1" "2" "3")'))).toEqual(["1", "2", "3"]);
      });
    });

    describe("atoms", function () {
      xit("should return string atom", function () {
        expect(t.interpret(t.parse('"a"'))).toEqual("a");
      });

      xit("should return string with space atom", function () {
        expect(t.interpret(t.parse('"a b"'))).toEqual("a b");
      });

      xit("should return string with opening paren", function () {
        expect(t.interpret(t.parse('"(a"'))).toEqual("(a");
      });

      xit("should return string with closing paren", function () {
        expect(t.interpret(t.parse('")a"'))).toEqual(")a");
      });

      xit("should return string with parens", function () {
        expect(t.interpret(t.parse('"(a)"'))).toEqual("(a)");
      });

      xit("should return number atom", function () {
        expect(t.interpret(t.parse("123"))).toEqual(123);
      });
    });

    describe("invocation", function () {
      xit("should run print on an int", function () {
        expect(t.interpret(t.parse("(print 1)"))).toEqual(1);
      });

      xit("should return first element of list", function () {
        expect(t.interpret(t.parse("(first (1 2 3))"))).toEqual(1);
      });

      xit("should return rest of list", function () {
        expect(t.interpret(t.parse("(rest (1 2 3))"))).toEqual([2, 3]);
      });
    });

    describe("lambdas", function () {
      xit("should return correct result when invoke lambda w no params", function () {
        expect(t.interpret(t.parse("((lambda () (rest (1 2))))"))).toEqual([2]);
      });

      xit("should return correct result for lambda that takes and returns arg", function () {
        expect(t.interpret(t.parse("((lambda (x) x) 1)"))).toEqual(1);
      });

      xit("should return correct result for lambda that returns list of vars", function () {
        expect(t.interpret(t.parse("((lambda (x y) (x y)) 1 2)"))).toEqual([
          1, 2,
        ]);
      });

      xit("should get correct result for lambda that returns list of lits + vars", function () {
        expect(t.interpret(t.parse("((lambda (x y) (0 x y)) 1 2)"))).toEqual([
          0, 1, 2,
        ]);
      });

      xit("should return correct result when invoke lambda w params", function () {
        expect(t.interpret(t.parse("((lambda (x) (first (x))) 1)"))).toEqual(1);
      });
    });

    describe("let", function () {
      xit("should eval inner expression w names bound", function () {
        expect(t.interpret(t.parse("(let ((x 1) (y 2)) (x y))"))).toEqual([
          1, 2,
        ]);
      });

      xit("should not expose parallel bindings to each other", function () {
        // Expecting undefined for y to be consistent with normal
        // identifier resolution in littleLisp.
        expect(t.interpret(t.parse("(let ((x 1) (y x)) (x y))"))).toEqual([
          1,
          undefined,
        ]);
      });

      xit("should accept empty binding list", function () {
        expect(t.interpret(t.parse("(let () 42)"))).toEqual(42);
      });
    });

    describe("if", function () {
      xit("should choose the right branch", function () {
        expect(t.interpret(t.parse("(if 1 42 4711)"))).toEqual(42);
        expect(t.interpret(t.parse("(if 0 42 4711)"))).toEqual(4711);
      });
    });
  }); */
});
