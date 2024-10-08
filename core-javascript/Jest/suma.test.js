 const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('asignación de un objeto', () => {
  const datos = {uno: 1};
  datos['dos'] = 2;
  expect(datos).toEqual({uno: 1, dos: 2});
});

test('hay "stop" en Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
