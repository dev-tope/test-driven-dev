import { caeserCipher } from "./caeserCipher";

test('encrypt a string by a shift factor of 3', () => {
  expect(caeserCipher('caeser')).toBe('FDHVHU')
})

test('encrypt a string by a shift factor of 22', () => {
  expect(caeserCipher('xylem', 22)).toBe('TUHAI');
})

test('encrypt a sring by a shift factor of 4, with punctuation', () => {
  expect(caeserCipher('ze, Bra', 4)).toBe('DI, FVE')
})