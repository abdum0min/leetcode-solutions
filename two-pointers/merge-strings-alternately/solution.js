/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0
    let j = 0
    let res = ""

    do {
        if(word1[i]){
            res += word1[i]
        }
        if(word2[j]){
            res += word2[j]
        }
        i++
        j++
    } while (i < word1.length || j < word2.length)
    
    return res
};

console.log(mergeAlternately("abc", "pqr"))