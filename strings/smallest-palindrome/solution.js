var smallestPalindrome = function (s) {
  const storeObj = {};

  for (let char of s) {
    storeObj[char] = (storeObj[char] || 0) + 1;
  }

  let leftArr = [];
  let middleChar = "";

  const sortedChars = Object.keys(storeObj).sort();

  for (let char of sortedChars) {
    const count = storeObj[char];

    const half = Math.floor(count / 2);
    for (let i = 0; i < half; i++) {
      leftArr.push(char);
    }

    if (count % 2 !== 0) {
      middleChar = char;
    }
  }

  const leftStr = leftArr.join("");

  const rightStr = leftArr.reverse().join("");

  return leftStr + middleChar + rightStr;
};

console.log(smallestPalindrome("babab"));
