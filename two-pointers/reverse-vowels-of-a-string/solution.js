/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    let chars = s.split("")
    const vowels = new Set("aeiouAEIOU");

    while(left < right){
        if(vowels.has(chars[left]) && !vowels.has(chars[right])){
            right--
        }
        if(!vowels.has(chars[left]) && vowels.has(chars[right])){
            left++
        }

        if(!vowels.has(chars[left]) && !vowels.has(chars[right])){
            left++
            right--
        }

        if(vowels.has(chars[left]) && vowels.has(chars[right])){
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++ 
            right--
        }
    }

    return chars.join("")
    
};

console.log(reverseVowels("IceCreAm"))