const findLongestCommonSubstring = (string1, string2) => {
  // 2D array for the char comparsions
  const comparsions = [];
  let maxSubStrLength = 0;
  let lastMaxSubStrIndex = -1,
    char1,
    char2,
    startIndex;

  for (let i = 0; i < string1.length; ++i) {
    comparsions[i] = new Array();

    for (let j = 0; j < string2.length; ++j) {
      char1 = string1.charAt(i);
      char2 = string2.charAt(j);

      if (char1 === char2) {
        if (i > 0 && j > 0) {
          comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
        } else {
          comparsions[i][j] = 1;
        }
      } else {
        comparsions[i][j] = 0;
      }

      if (comparsions[i][j] > maxSubStrLength) {
        maxSubStrLength = comparsions[i][j];
        lastMaxSubStrIndex = i;
      }
    }
  }

  if (maxSubStrLength > 0) {
    startIndex = lastMaxSubStrIndex - maxSubStrLength + 1;

    return string1.substr(startIndex, maxSubStrLength);
  }
};

// Test code
console.log(findLongestCommonSubstring('ababccd', 'abcct'));
console.log(findLongestCommonSubstring('ababccd', 'ccxaba'));
console.log(findLongestCommonSubstring('fortnite4lyfe', 'lyfe4fortnite'));
console.log(findLongestCommonSubstring('ababccd', 'zzzz'));
