function toASCII(input) {
  var ascii = input.charCodeAt(0);
  return ascii;
}

function toBinary(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
      var bin = input[i].charCodeAt().toString(2);
      result += Array(8 - bin.length + 1).join("0") + bin;
  }
  return result;
}
var Binary = toBinary('65');
console.log(Binary);

module.exports = {
  toASCII,
  toBinary
}