(function (exports) {
  var parse = (input) => {
    let expressions = input.split(".");
    expressions = expressions.slice(0, expressions.length - 1);

    return expressions.map((expression) => {
      const parseValue = (value) => value.split(`"`).join(``);

      // `"user" box stores "Gabriel Romay".`
      const words = expression.split(" ");
      const assignedValue = words.slice(3, words.length).join(" ");

      return {
        type: words[2] === "stores" ? "assign" : null,
        operator: "=",
        left: {
          type: words[1] === "box" ? "const" : "let",
          value: parseValue(words[0]),
        },
        right: {
          type: typeof assignedValue,
          value: parseValue(assignedValue),
        },
      };
    });
  };

  exports.parser = {
    parse: parse,
  };
})(typeof exports === "undefined" ? this : exports);
