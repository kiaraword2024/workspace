const { getValuesInRange } = require('./ex12.6_tema12');

describe('getValuesInRange', () => {
    const mySet1 = new Set([10, 20, 30, 40, 50]);

    test('Sould return array when passed valid value', () => {
        const result = getValuesInRange(mySet1, 11, 40);
        expect(result).toEqual([20, 30, 40]);
    });
    test('Sould return array when passed value 0 as an range', () => {
        const result = getValuesInRange(mySet1, 0, 20);
        expect(result).toEqual([10, 20]);
    });
    test('Should throw an error when passed not valid value', () => {
        expect(() => {
            getValuesInRange(mySet1, 60, 70);
        }).toThrow('Error:not valid value.');
    });

    test('Should throw an error when passed 0 and negative value', () => {
        expect(() => {
            getValuesInRange(mySet1, 0, -100);
        }).toThrow('Error:not valid value.');
    });
});
