 const { capitalize_last_name, ValueError } = require('./ex9.17_tema9');

describe('capitalize_last_name', () => {
    test('should return "Marisa TOMEI" when pased "marisa tomei"', () => {
        expect(capitalize_last_name("marisa tomei")).toMatch("Marisa TOMEI");
    });

    test('should return "Marisa TOMEI" when pased object String', () => {
        const name_obj = new String('marisa tomei');
        expect(capitalize_last_name(name_obj)).toBe('Marisa TOMEI');
    });

    test('should throw an error when argument is not a string', () => {
        expect(() => capitalize_last_name(333)).toThrow(new TypeError('Should be a string as an argument.'));
    });
    test('should throw an ValueError when the string is not exactly 2 words length.', () => {
        expect(() => capitalize_last_name('marisa tomei de la rivera')).toThrow(ValueError);
    });

    test('should catch and return the error message of ValueError', () => {
        try {
            capitalize_last_name("marisa");
        } catch (error) {
            expect(error.message).toBe("The string must contain exactly two words.");
        }
    });
    test('should catch and return the error message of ValueError', () => {
        try {
            capitalize_last_name(333);
        } catch (error) {
            expect(error.message).toBe('Should be a string as an argument.');
        }
    });
}); 
