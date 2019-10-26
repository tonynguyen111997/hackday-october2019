const { toASCII, toBinary } = require('../util/toASCII');

it('Should return a Char', () => {
  expect(toASCII('A')).toBe(65);
  expect(toBinary('70')).toBe('0011011100110000');
});
