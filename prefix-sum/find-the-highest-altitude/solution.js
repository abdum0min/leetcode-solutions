/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = 0
    let maxAltitude = 0

    for(let i = 0; i < gain.length; i++){
        altitude += gain[i]

        if(maxAltitude < altitude){
            maxAltitude = altitude
        }
    }

    return maxAltitude
};

console.log(largestAltitude([-5,1,5,0,-7]))