import capitalize from "./capitalize";

test('Capitalizes the first character of a string', () => {
  expect(capitalize('string')).toBe('String');
})