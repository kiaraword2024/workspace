 /*eslint-disable camelcase */
 const mapWithCb = require('./ex2_tema6');

 
describe('mapWithCb', () => {
  it('should apply the callback to all the elements', () => {
    const cumple = [20, 1, 1983];
    const callback = (num) => num * 10;
    const resultadoEs = [200, 10, 19830];

    const resultado = mapWithCb(cumple, callback);
    expect(resultado).toEqual(resultadoEs);
  });

  it('should do the correct sum of the elements', () => {
    const cumple = [20, 1, 1983];
    let sum = 0;
    for (let num of cumple){
      sum += num;
    }
    expect(sum).toBe(2004);
  });

  it('should return an empty array when passed an empty array', () => {
    const cumple = [];
    const resultado = mapWithCb(cumple, (num) => num * 10);
    expect(resultado).toEqual([]);
    });

  it('should return a negative number when passed negatives numbers in array', () => {
      const cumple = [-20, -1, -1983];
      const resultado = mapWithCb(cumple, (num) => num * 10);
      expect(resultado).toEqual([-200, -10, -19830]);
      });

  it('should return the correct array after applying the callback', () => {
    const cumple = [20, 1, 1983];
        // Creamos un mock que devuelve un valor modificado
    const mockCallback = jest.fn((num) => num + 1);

        // Llamamos a mapWithCb con el mock
    const result = mapWithCb(cumple, mockCallback);

        // Verificamos que el resultado es el esperado
    expect(result).toEqual([21, 2, 1984]);
    });
 });