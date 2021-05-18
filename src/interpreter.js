(function (exports) {
  const interpret = (expressions) => {
    return expressions.reduce((result, expression) => {
      const { left, right, operator } = expression;

      return (
        result +
        `${left.type} ${left.value} ${operator} ${
          right.type === "string" ? `"${right.value}"` : right.value
        };`
      );
    }, "");
  };

  exports.interpreter = {
    interpret: interpret,
  };
})(typeof exports === "undefined" ? this : exports);
