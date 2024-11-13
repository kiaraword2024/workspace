 /*eslint-disable camelcase */

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}

function capitalize_last_name(name) {

    if (!(name instanceof String) && typeof name !== 'string') {
        throw new TypeError('Should be a string as an argument.');
    }

    const words = name.split(' ');

    if (words.length !== 2) {
        throw new ValueError('The string must contain exactly two words.');
    }

    const first_name = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    const last_name = words[1].toUpperCase();

    return first_name + ' ' + last_name;
};

try {
    const result = capitalize_last_name('marisa tomei');
    console.log(result);
} catch (error) {
      if (error instanceof TypeError) {
        console.log('Should be a string as an argument.');
    } else if (error instanceof ValueError) {
        console.log('The string must contain exactly two words.');
    }
 }

module.exports = {
    capitalize_last_name,
};
