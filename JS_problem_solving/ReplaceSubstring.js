// Replacing a substring in a string

// #1
function replaceSubstring(str, subStr, newSubStr) {
  return str.replaceAll(subStr, newSubStr);
}

// #2
function replaceSubstring2(str, subStr, newSubStr) {
  return str.split(subStr).join(newSubStr);
}

// #3
function replaceSubstring3(str, subStr, newSubStr) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + subStr.length) === subStr) {
      result += newSubStr;
      i += subStr.length - 1;
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceSubstring("Hello, world!", "world", "everyone"));
console.log(replaceSubstring("123 123 123", "123", "bruh"));

console.log(replaceSubstring2("Hello, world!", "world", "everyone"));
console.log(replaceSubstring2("123 123 123", "123", "bruh"));

console.log(replaceSubstring3("Hello, world!", "world", "everyone"));
console.log(replaceSubstring3("123 123 123", "123", "bruh"));
