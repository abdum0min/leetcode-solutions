var lengthOfLongestSubstring = function (s) {
  let p1 = 0;
  let maxLen = 0;

  for (let p2 = 0; p2 < s.length; p2++) {
    let char = s[p2];
    let subs = s.slice(p1, p2);

    if (subs.includes(char)) {
      let dublicateIdx = subs.indexOf(char);
      p1 = p1 + dublicateIdx + 1;
    }

    let currentLen = p2 - p1 + 1;
    maxLen = Math.max(maxLen, currentLen);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
