/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum =  nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    let res = sum

    for(let i = 1; i < nums.length - k+1; i++){
        sum = sum - nums[i-1] + nums[i+k-1]
        if(res < sum){
            res=sum
        }
    }

    return res / k
};


console.log(findMaxAverage([0,4,0,3,2], 1))