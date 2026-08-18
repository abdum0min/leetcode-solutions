var minimumPushes = function (word) {
  const charsCount = {};
  const charsPushs = {};

  for (char of word) {
    if (char in charsCount) {
      charsCount[char] += 1;
    } else {
      charsCount[char] = 1;
    }
  }

  const sortedLetters = Object.keys(charsCount).sort(
    (a, b) => charsCount[b] - charsCount[a]
  );

  sortedLetters.forEach((char, idx) => {
    const pushs = Math.floor(idx / 8) + 1;
    charsPushs[char] = pushs;
  });

  let res = 0;
  for (p in charsPushs) {
    res += charsPushs[p] * charsCount[p];
  }

  return res;
};

console.log(minimumPushes("aabbccddeeffgghhiiiiii"));
