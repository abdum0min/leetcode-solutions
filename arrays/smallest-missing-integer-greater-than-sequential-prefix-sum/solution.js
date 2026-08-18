var missingInteger = function (nums) {
  let prev = null;
  let res = 0;
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (prev) {
      if (prev + 1 === nums[i]) {
        sumArr.push(nums[i]);
      }
    } else {
      sumArr.push(nums[i]);
    }
    prev = nums[i];
  }

  for (num of sumArr) {
    res += num;
  }
  while (nums.includes(res)) {
    res++;
  }
  return res;
};

console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]));
