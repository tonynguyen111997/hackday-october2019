const convertDNAtoASCII = require('../util/toASCII')['convertDNAToASCII'];
const convertRNAtoASCII = require('../util/toASCII')['convertRNAToASCII'];

it('Should return dna letter', () => {
  expect(convertDNAtoASCII('A')).toBe('GAAG');
  expect(convertDNAtoASCII('B')).toBe('CAAG');
  expect(convertDNAtoASCII('Z')).toBe('CCGG');
});

it('Should return dna result', () => {
  expect(convertDNAtoASCII('cat')).toBe('AGTGGACGTACG');
  expect(convertDNAtoASCII('CAT')).toBe('AGGGGAAGTAAG');
  expect(convertDNAtoASCII('dog')).toBe('TGCGTTCGAGCG');
  expect(convertDNAtoASCII('DOG')).toBe('TGAGTTAGAGAG');
  expect(convertDNAtoASCII('pizza')).toBe('GACGCCTGCCTGGCCGAATG');
  expect(convertDNAtoASCII('PIZZA')).toBe('GAAGCCGGCCGGGCAGAAGG');
});

it('Should return rna result', () => {
  expect(convertRNAtoASCII('cat')).toBe('AGUGGACGUACG');
  expect(convertRNAtoASCII('CAT')).toBe('AGGGGAAGUAAG');
  expect(convertRNAtoASCII('dog')).toBe('UGCGUUCGAGCG');
  expect(convertRNAtoASCII('DOG')).toBe('UGAGUUAGAGAG');
  expect(convertRNAtoASCII('pizza')).toBe('GACGCCUGCCUGGCCGAAUG');
  expect(convertRNAtoASCII('PIZZA')).toBe('GAAGCCGGCCGGGCAGAAGG');
})
