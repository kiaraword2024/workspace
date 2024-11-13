 /*eslint-disable camelcase */
class Transformer {
    constructor(initial_string) {
     if (typeof initial_string !== 'string') {
        throw new Error('Should be a string as an argument.');
      } 
      this.initial_string = initial_string;
    }
    to_char_array() {
      return Array.from(this.initial_string);
    }
    randomize_characters() {
      const char_array = this.to_char_array();
      for (let i = char_array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [char_array[i], char_array[j]] = [char_array[j], char_array[i]];
      }
      this.initial_string = char_array.join('');
      return this.initial_string;
    }
    reverse_characters() {
      this.initial_string = this.to_char_array().reverse().join('');
      return this.initial_string;
    }
    remove_vowels() {
      this.initial_string = this.initial_string.replace(/[aeiouAEIOU]/g, '');
      return this.initial_string;
    }
    remove_consonants() {
      this.initial_string = this.initial_string.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g, '');
      return this.initial_string;
    }
    to_word_array() {
      return /[a-zA-Z]/.test(this.initial_string) ? this.initial_string.split(/\s+/) : [];
    }
    reverse_words() {
      this.initial_string = this.to_word_array().reverse().join(' ');
      return this.initial_string;
    }
    get_string() {
      return this.initial_string;
    }
  }
const transformation = new Transformer('Es un mundo dificil');
console.log(transformation.get_string());

 module.exports = {
   Transformer,
   };
   