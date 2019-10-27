const convertDNAToASCII = (word) => {

  // hold toASCII function results
  var ASCIIArr = [];
  // converts characters in string to ASCII
  function toASCII(input) {
    for (var i = 0; i < input.length; i++) {
        var ascii = input.charCodeAt(i);
        ASCIIArr.push(ascii);
    }
    // console.log(ASCIIArr);
    return ASCIIArr;
  }
  // testing toASCII function
  var ASCII = toASCII(word);
  // console.log(ASCII);
  // holds toBinary function results
  var binaryArr = [];
  // converts ASCII to binary
  function toBinary(input) {
    for (var i = 0; i < input.length; i++) {
        var binary = input[i].toString(2);
        binaryArr.push(binary);
        // console.log(binaryArr);
    }
    return binaryArr;
  }
  // test toBinary function
  toBinary(ASCIIArr);
  // format each binary result from binaryArr
  function checkEven(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].length % 2 !== 0) {
            input[i] = '0' + input[i];
        }
    }
    // console.log(input);
    return input;
  }
  // test checkEven function
  // console.log(binaryArr);
  checkEven(binaryArr);
  // combine all binary conversions for each character into one binary
  var Binary1 = binaryArr.join("");
  // console.log(Binary1);
  // holds the results of splitIntoTwo function
  const bitsArr = [];
  // split binary number into two bit elements
  function splitIntoTwo(str) {
    // End cases
    if (str.length <= 0) {
        return null;
    }
    //
    bitsArr.push(str.slice(-2));
    //
    let newStr = str.slice(0, str.length - 2);
    splitIntoTwo(newStr);
  }
  // test splitIntoTwo function
  splitIntoTwo(Binary1);
  // console.log(bitsArr);
  // convert every two bit element into corresponding DNA base
  function DNA(bitsArr) {
    for (var i = 0; i < bitsArr.length; i++) {
        if (bitsArr[i] === '00') {
            bitsArr[i] = 'A';
        }
        else if (bitsArr[i] === '01') {
            bitsArr[i] = 'G';
        }
        else if (bitsArr[i] === '10') {
            bitsArr[i] = 'C';
        }
        else if (bitsArr[i] === '11') {
            bitsArr[i] = 'T';
        }
    }
    var dna = bitsArr.join("");
    // console.log(dna);
    return dna;
  }
  // test DNA function
  return DNA(bitsArr);
}

const convertRNAToASCII = (word) => {

  // hold toASCII function results
  var ASCIIArr = [];
  // converts characters in string to ASCII
  function toASCII(input) {
    for (var i = 0; i < input.length; i++) {
        var ascii = input.charCodeAt(i);
        ASCIIArr.push(ascii);
    }
    // console.log(ASCIIArr);
    return ASCIIArr;
  }
  // testing toASCII function
  var ASCII = toASCII(word);
  // console.log(ASCII);
  // holds toBinary function results
  var binaryArr = [];
  // converts ASCII to binary
  function toBinary(input) {
    for (var i = 0; i < input.length; i++) {
        var binary = input[i].toString(2);
        binaryArr.push(binary);
        // console.log(binaryArr);
    }
    return binaryArr;
  }
  // test toBinary function
  toBinary(ASCIIArr);
  // format each binary result from binaryArr
  function checkEven(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].length % 2 !== 0) {
            input[i] = '0' + input[i];
        }
    }
    // console.log(input);
    return input;
  }
  // test checkEven function
  // console.log(binaryArr);
  checkEven(binaryArr);
  // combine all binary conversions for each character into one binary
  var Binary1 = binaryArr.join("");
  // console.log(Binary1);
  // holds the results of splitIntoTwo function
  const bitsArr = [];
  // split binary number into two bit elements
  function splitIntoTwo(str) {
    // End cases
    if (str.length <= 0) {
        return null;
    }
    //
    bitsArr.push(str.slice(-2));
    //
    let newStr = str.slice(0, str.length - 2);
    splitIntoTwo(newStr);
  }
  // test splitIntoTwo function
  splitIntoTwo(Binary1);
  // console.log(bitsArr);
  // convert every two bit element into corresponding DNA base
  function DNA(bitsArr) {
    for (var i = 0; i < bitsArr.length; i++) {
        if (bitsArr[i] === '00') {
            bitsArr[i] = 'A';
        }
        else if (bitsArr[i] === '01') {
            bitsArr[i] = 'G';
        }
        else if (bitsArr[i] === '10') {
            bitsArr[i] = 'C';
        }
        else if (bitsArr[i] === '11') {
            bitsArr[i] = 'U';
        }
    }
    var dna = bitsArr.join("");
    // console.log(dna);
    return dna;
  }
  // test DNA function
  return DNA(bitsArr);
}

module.exports = {
  convertDNAToASCII,
  convertRNAToASCII
}
