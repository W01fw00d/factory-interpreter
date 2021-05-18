> Any fool can write code that a computer can understand.
> Good programmers write code that humans can understand.
>
> - [Martin Fowler](https://en.wikiquote.org/wiki/Martin_Fowler)

# About the interpreter

_Based on:_

- [Little List Interpreter](https://maryrosecook.com/blog/post/little-lisp-interpreter) ([code repository](https://github.com/maryrosecook/littlelisp)) by mary@maryrosecook.com and Martin Tornwall; this project was forked from that one

- ["How to implement a programming language in JavaScript"](http://lisperator.net/pltut/); specially the AST concept and example

## Run all tests

```
npm run test
```

## Run a terminal interface

You can run your own programs on the fly!

```
npm run interface
```

_Examples to run:_

`"user" box stores "Gabriel Romay". Print "user".` : `const user = "Gabriel Romay";console.log(user);`

# About the Factory Language

A programming language for people that want to communicate through code but using plain `English`.

It's very experimental and opinionated.

Its main goal is `teaching JavaScript` and basic programming to `first-time coders`.

## Manifesto:

- `English` language is simple but `powerful` enough to express complex code concepts
- We don't need to use random symbols or funny colors: we need `simpler abstractions`
- Nowadays, `computers` can handle almost any task, but most `humans` don't need to know the `low-level details` of how they do it
- We don't need to set high intelectual walls around coding: `everybody can code`

## Concepts:

_Implemented:_

- An `opened box` it's a variable that can be modified. A `closed box` is a constant (cannot be modified). By default, a `box` it's a `closed box`

- "`.`" divides code expressions. That way, user can structure their "story" in paragraphs or lonely lines.

- This language is designed for `functional programming`, and ignores completely and shamelessly `OOP`.

_Pending:_

- Variable `types` will be `inferred` as in vanilla JS.

- A `machine` is a function. You call a function by `turning on` a `machine`
- Boolean true = `yes`, false = `no`

- An object is a `closet`, object atributes are `drawers`

- A file.fact is a `factory`. A `box` created inside a `factory` can be used by any `machine` in that `factory`.
- A `box` created inside a `machine` can only be used by that `machine`

- A `factory` can import `boxes` and `machines` from other `factories`, if they have `wheels` (public scope). By default, they don't have `wheels` (they are private).
