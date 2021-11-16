function caesarCipher(str, shift) {
  var solved = "";
  for (var i = 0; i < str.length; i++) {
    var num = str[i].toUpperCase().charCodeAt();
    if (num >= 65 && num <= 77) {
      solved += String.fromCharCode(num + shift);
    } else if (num >= 78 && num <= 90) {
      solved += String.fromCharCode(num - shift);
    }
  }
  return solved;
}

module.exports = caesarCipher;
