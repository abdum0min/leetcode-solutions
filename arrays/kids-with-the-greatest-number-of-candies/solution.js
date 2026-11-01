/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = []
    const maxCandies = Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        if(candies[i] + extraCandies >= maxCandies){
            res.push(true)
        }else{
            res.push(false)
        }
    }

    return res
};