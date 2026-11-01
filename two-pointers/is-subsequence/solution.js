/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    let pointOne = 0

    if (s.length === 0) return true;

    for(let i=0;i<t.length;i++){
        if(s[pointOne] === t[i]){
            pointOne++
        }
        if(pointOne === s.length) return true
    }

    return false
};

console.log(isSubsequence("axc", "ahbgdc"))