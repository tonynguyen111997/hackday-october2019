const findLCS = require('../util/LCS');

it('Should return a common substring', () => {
  expect(findLCS('ababccd', 'abcct')).toBe('abcc');
  expect(findLCS('ababccd', 'ccxaba')).toBe('aba');
  expect(findLCS('fortnite4lyfe', 'lyfe4fortnite')).toBe('fortnite');
  expect(findLCS('billybob', 'sponegbob')).toBe('bob');
});

it('Should return undefined', () => {
  expect(findLCS('ababccd', 'zzzz')).toBe(undefined);
  expect(findLCS('ababccd', 'zghi')).toBe(undefined);
  expect(findLCS('all', 'bye')).toBe(undefined);
});