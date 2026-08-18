var maxProduct = function (n) {
  let nums = Array.from(String(n), Number).sort((a, b) => b - a);

  return nums[0] * nums[1];
};

console.log(maxProduct(12754));
