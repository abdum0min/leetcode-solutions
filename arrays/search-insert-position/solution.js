var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort();
    return nums.indexOf(target);
  }
};

console.log(searchInsert([1, 3, 5, 6], 2));
