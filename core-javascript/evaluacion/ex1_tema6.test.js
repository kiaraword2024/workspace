const fizzBuzz = require('./ex1_tema6');

test('should return "0" when passed 0', () => {
  expect(fizzBuzz(0)).toBe("0");
});

test('should return "No es un numero" when passed string', () => {
  expect(fizzBuzz("string")).toBe("No es un numero");
});

test('should return "Chiara Polo" when passed []', () => {
  //Cuando pasas un array vacio lo lee como si fuera Number[] que equivale a  0.//
  expect(fizzBuzz([])).toBe("Chiara Polo");
});

test('fizzBuzz(15) returns "Chiara Polo"', () => {
  expect(fizzBuzz(15)).toBe("Chiara Polo");
});

test('fizzBuzz(3) returns "Chiara"', () => {
  expect(fizzBuzz(3)).toBe("Chiara");
});

test('fizzBuzz(5) returns "Polo"', () => {
  expect(fizzBuzz(5)).toBe("Polo");
});

test('fizzBuzz(77) returns "77"', () => {
  expect(fizzBuzz(77)).toBe("77");
});
