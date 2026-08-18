var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((acc, curr) => acc + curr, 0);
  k %= sum;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }
};

console.log(chalkReplacer([3, 4, 1, 2], 25));
