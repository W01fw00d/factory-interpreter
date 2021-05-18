(function (exports) {
  var parse = (input) => {
    let expressions = input.split(".");
    expressions = expressions.slice(0, expressions.length - 1);

    return expressions.map((expression) => {
      const parseValue = (value) => value.split(`"`).join(``);
      const formatWord = (word) => (word ? word.toLowerCase() : word);

      const words = expression.split(" ");

      let result = {};

      if (formatWord(words[0]) === "show") {
        result = {
          type: "call",
          func: { type: "var", value: "console.log" },
          args: [{ type: "var", value: parseValue(words[1]) }],
        };
      } else {
        // Box
        let typeOfBox = "const";
        let expressionTypeIndex = 2;
        let valueIndex = 3;
        if (formatWord(words[1]) === "opened") {
          typeOfBox = "let";
          expressionTypeIndex++;
          valueIndex++;
        }

        const assignedValue = words.slice(valueIndex, words.length).join(" ");

        result = {
          type:
            formatWord(words[expressionTypeIndex]) === "stores"
              ? "assign"
              : null,
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
      }

      return result;
    });
  };

  exports.parser = {
    parse: parse,
  };
})(typeof exports === "undefined" ? this : exports);
