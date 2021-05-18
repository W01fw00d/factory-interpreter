(function (exports) {
  var parse = (input) => {
    let expressions = input.split(".");
    expressions = expressions.slice(0, expressions.length - 1);

    return expressions.map((expression) => {
      const parseValue = (value) => value.split(`"`).join(``);

      const words = expression.split(" ");

      let typeOfBox = "const";
      let expressionTypeIndex = 2;
      let valueIndex = 3;
      if (words[1] === "opened") {
        typeOfBox = "let";
        expressionTypeIndex++;
        valueIndex++;
      }

      const assignedValue = words.slice(valueIndex, words.length).join(" ");

      return {
        type: words[expressionTypeIndex] === "stores" ? "assign" : null,
        operator: "=",
        left: {
          type: typeOfBox,
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
