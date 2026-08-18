const openbrackets = ["(", "{", "["];

const pairs = {
  ")": "(",
  "]": "[",
  "}": "{",
};

var isValid = function (s) {
  let chars = Array.from(s);

  let stack = [];

  for (let char of chars) {
    if (openbrackets.includes(char)) {
      stack.push(char);
    } else {
      if (pairs[char] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("[{}]"));
