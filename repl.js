const repl = require("repl");

const parser = require("./src/parser").parser;
const interpreter = require("./src/interpreter").interpreter;

repl.start({
  prompt: "> ",
  eval: (cmd, context, filename, callback) => {
    const ret = interpreter.interpret(parser.parse(cmd));
    callback(null, ret);
    eval(ret);
  },
});
