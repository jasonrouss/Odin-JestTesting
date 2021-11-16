function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var str = reverseArray.join("");
  return str;
}

module.exports = reverseString;
