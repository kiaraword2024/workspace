const fizzBuzz = require('./ex1_tema6');

test('should return 0 when passed 0', () => {
  expect(fizzBuzz(0)).toBe("0");
});

test('should return string when passed string', () => {
  expect(fizzBuzz("")).toBe("");
});
