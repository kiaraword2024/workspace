/* eslint-disable camelcase */
const{ multiplos } = require('./ex7_only_function');

describe('multiplos', () => {
    test('should return array [4, 8, 12, 16] when pased tamano 4 and numero 4', () => {
    expect(multiplos(4, 4)).toEqual([4, 8, 12, 16]);
});
    test('should return "Por favor, introduce valores válidos." when passed tamaño 0', () => {
        expect(multiplos(0, 5)).toEqual("Por favor, introduce valores válidos.");
    });

    test('should return "Por favor, introduce valores válidos." array when passed tamaño negativo', () => {
        expect(multiplos(-3, 5)).toEqual("Por favor, introduce valores válidos.");
    });
    test('should return "Por favor, introduce valores válidos." when passed tamaño string', () => {
        expect(multiplos("string", 5)).toEqual("Por favor, introduce valores válidos.");
    });
    test('should return array when pasade tamaño 4 and numero -4', () =>{
      expect(multiplos(4, -4)).toStrictEqual([-4, -8, -12, -16]);
    })
    test('should return array when pasade tamaño 4 and numero 0', () =>{
        expect(multiplos(4, 0)).toStrictEqual([0, 0, 0, 0]);
      })
});
