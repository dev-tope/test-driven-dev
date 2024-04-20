import { calculator } from "./calculator";

test('add two numbers together', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('subtract two numbers together', () => {
  expect(calculator.subtract(1, 2)).toBe(-1)
})

test('divide two numbers together', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('multiply two numbers together', () => {
  expect(calculator.multiply(1, 2)).toBe(2)
})
