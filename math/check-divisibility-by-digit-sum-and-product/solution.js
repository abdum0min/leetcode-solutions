/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    const digits = String(n).split('').map(Number)
    const s = digits.reduce((acc, curr) => acc + curr, 0)
    const p = digits.reduce((acc, curr) => acc * curr, 1)

    return n % (s + p) === 0
};

console.log(checkDivisibility(102))