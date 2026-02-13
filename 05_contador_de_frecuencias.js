string_one = "roma";
string_two = "amor";
string_three = "cuba";

function isAnagram(str1, str2) {
  let new_str_two = str2;

  for (const char of str1) {
    const char1 = char;
    for (let i = 0; i < str2.length; i++) {
      if (char1 === str2[i]) {
        new_str_two = new_str_two.slice(0, i) + new_str_two.slice(i + 1);
        continue;
      }
    }
  }

  if (new_str_two.length === 0) {
    return "Is Anagram";
  } else {
    return "Is Not Anagram";
  }
}

console.log(isAnagram(string_one, string_two)); // Is Anagram
console.log(isAnagram(string_one, string_three)); // Is Not Anagram

// Optimizada soluzione

function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] = lookup[char] - 1;
    }
  }

  return true;
}

console.log(isAnagram2(string_one, string_two)); // true
console.log(isAnagram2(string_one, string_three)); // false
