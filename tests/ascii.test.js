const { toASCII, toBinary } = require('../util/toASCII');

it('Should return a Char', () => {
  expect(toASCII('A')).toBe(65);
  expect(toASCII('B')).toBe(66);
  expect(toBinary('70')).toBe('0011011100110000');
});

// it('Should return a word', () => {
//   expect().toBe('cat');
//   expect().toBe('CAT');
//   expect().toBe('dog');
//   expect().toBe('DOG');
//   expect().toBe('pizza');
//   expect().toBe('PIZZA');
// });

// it('Should return a sentence', () => {
//   expect().toBe('I like pizza');
//   expect().toBe('Inland Empire Software Development');
// });