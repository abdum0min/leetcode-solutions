var passThePillow = function (n, time) {
  let i = 1;
  let direction = "forward";
  for (i; time !== 0; time--) {
    if (i === n) {
      direction = "opposite";
    } else if (i === 1) {
      direction = "forward";
    }

    console.log(time);
    if (direction === "forward") {
      i++;
    } else {
      i--;
    }
  }
  return i;
};

console.log(passThePillow(3, 2));
