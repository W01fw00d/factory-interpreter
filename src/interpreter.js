(function (exports) {
  const interpret = (expressions) => {
    return expressions.reduce((accumulator, expression) => {
      const { type } = expression;
      if (type === "call") {
        const { func, args } = expression;

        accumulator += `${func.value}(${args.reduce((accumulator, arg) => {
          const { value } = arg;
          return accumulator + (accumulator.length === 0 ? value : `,${value}`);
        }, "")});`;
      } else {
        // assign
        const { left, right, operator } = expression;

        accumulator += `${left.type} ${left.value} ${operator} ${
          right.type === "string" ? `"${right.value}"` : right.value
        };`;
      }

      return accumulator;
    }, "");
  };

  exports.interpreter = {
    interpret: interpret,
  };
})(typeof exports === "undefined" ? this : exports);
