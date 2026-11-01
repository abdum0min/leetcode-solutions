/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let left = s.length - 1;
    let right = -1;
    let res = ""
    
    while(left !== -1){
        if(s[left] !== " " && right === -1){
            right = left
        }

        if((s[left-1] === " " || left === 0) && right !== -1 && s[left] !== " "){
            if (!res){
                res += `${s.slice(left, right + 1)}`
            }else{
                res += ` ${s.slice(left, right + 1)}`
            }
            right = -1
        }

        left--
    }

    return res
};


console.log(reverseWords("a good   example"))