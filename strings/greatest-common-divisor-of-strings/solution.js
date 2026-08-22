/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return ""
    const ekub = (a, b) => (b === 0 ? a : ekub(b, a % b));
    const ekub1a2 = ekub(str1.length, str2.length)
    return str1.slice(0, ekub1a2)
};

console.log(gcdOfStrings("ABABAB", "ABAB"))