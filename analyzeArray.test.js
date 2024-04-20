import { analyzeArray } from "./analyzeArray"

test('return average of array', () => {
  expect(analyzeArray.average([1,2,3,4,5])).toBe(3)
})

test('return the minimum value in the array', () => {
  expect(analyzeArray.min([1,2,3,4,5])).toBe(1)
})

test('return the maximum value of array', () => {
  expect(analyzeArray.max([1,2,3,4,5])).toBe(5)
})

test('returns the length of array', () => {
  expect(analyzeArray.length([1,2,3,4,5])).toBe(5)
})