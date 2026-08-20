/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const seatsObj = {};
    let res = 0;

    const aSeats1 = [2, 3, 4, 5];
    const aSeats2 = [4, 5, 6, 7];
    const aSeats3 = [6, 7, 8, 9];

    for (let s of reservedSeats) {
        if (s[0] in seatsObj) {
            seatsObj[s[0]].push(s[1]);
        } else {
            seatsObj[s[0]] = [s[1]];
        }
    }

    res = (n - Object.keys(seatsObj).length) * 2;

    for (let r in seatsObj) {
        const avObj = {
            1: true,
            2: true,
            3: true
        };

        for (let s of seatsObj[r]) {
            if (aSeats1.includes(s)) {
                avObj[1] = false;
            }

            if (aSeats2.includes(s)) {
                avObj[2] = false;
            }

            if (aSeats3.includes(s)) {
                avObj[3] = false;
            }
        }

        if (avObj[1] && avObj[3]) {
            res += 2;
        }
        else if (avObj[1] || avObj[2] || avObj[3]) {
            res += 1;
        }
    }

    return res;
};

console.log(
    maxNumberOfFamilies(
        3,
        [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]
    )
);