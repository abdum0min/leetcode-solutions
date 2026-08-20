/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 = []
    const arr2 = []

    arr1.push(nums.shift())
    arr2.push(nums.shift())

    for (let i of nums) {
        if(arr1.at(-1) > arr2.at(-1)) {
            arr1.push(i)
        }else{
            arr2.push(i)
        }
    }

    return arr1.concat(arr2)
};

console.log(resultArray([5,4,3,8]))