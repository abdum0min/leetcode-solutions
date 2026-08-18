/**
 * @param {number[]} nums
 * @param {number} k
 * @return {numbaer}
 */


var largestInteger = function(nums, k) {
    const obj = {}

    for (let i = 0; i <= nums.length - k; i++) {
        let subArray = nums.slice(i, i + k)
        for(let num of new Set(subArray)) {
            if (num in obj) {
                obj[num]++
            }else {
                obj[num] = 1
            }
        }
    }

    let resArr = []

    for(let num in obj) {
        if(obj[num] === 1){
            resArr.push(Number(num))
        }
    }
    let res = resArr.sort((a, b) => b - a)[0]
    if(res !== undefined) {
        return res
    }else {
        return -1
    }
};

console.log(largestInteger([7,7,7], 2))
