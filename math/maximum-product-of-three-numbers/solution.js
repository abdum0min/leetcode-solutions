var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const n = nums.length;

  const opt1 = nums[0] * nums[1] * nums[2];

  const opt2 = nums[0] * nums[n - 1] * nums[n - 2];

  return Math.max(opt1, opt2);
};

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
