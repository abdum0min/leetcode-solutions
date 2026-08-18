const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;
  let prev = null;

  for (str of s) {
    let rStr = romanMap[str];
    let rPrev = romanMap[prev];
    if (rPrev < rStr && prev !== null) {
      result += rStr - rPrev * 2;
    } else {
      result += rStr;
    }
    prev = str;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
