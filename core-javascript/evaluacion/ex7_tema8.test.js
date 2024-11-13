const { Transformer } = require('./ex7_tema8');

describe('Transformer class', () => {

   test('should throw an error when initial_string is not a string', () => {
    expect(() => { new Transformer(123);}).toThrow(Error);
  });
 
  test('should handle a string without consonants', () => {
    const transformer = new Transformer('oia');
    expect(transformer.remove_vowels()).toBe('');
  });

  test('should handle a palindrome correctly', () => {
    const transformer = new Transformer('radar');
    expect(transformer.reverse_characters()).toBe('radar');
  });

  test('should handle an empty string', () => {
    const transformer = new Transformer('');
    expect(transformer.to_char_array()).toEqual([]);
  });

  test('should handle strings with special characters', () => {
    const transformer = new Transformer('@#%$');
    expect(transformer.to_word_array()).toEqual([]);
  });

  test('should remove consonants', () => {
    const transformer = new Transformer('mundo');
    expect(transformer.remove_consonants()).toBe('uo');
  });

  test('should randomize characters', () => {
    const transformer = new Transformer('Es un mundo dificil');
    const originalString = transformer.get_string();
    const randomizedString = transformer.randomize_characters();
    expect(randomizedString).not.toBe(originalString);
    expect(transformer.to_char_array().sort()).toEqual(originalString.split('').sort());
  });

  test('should reverse words in a sentence', () => {
    const transformer = new Transformer('Es un mundo dificil');
    expect(transformer.reverse_words()).toBe('dificil mundo un Es');
  });

  test('get_string should return the current string', () => {
    const transformer = new Transformer('Es un mundo dificil');
    expect(transformer.get_string()).toBe('Es un mundo dificil');
  });
});
