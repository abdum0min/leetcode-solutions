/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newArr = s.split(" ").filter(item => item.length !== 0)

    return newArr.reverse().join(" ")
};


console.log(reverseWords("the sky is blue"))