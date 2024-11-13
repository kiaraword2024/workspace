/* Crea una función para obtener todos los valores de un set que estén
entre dos rangos (numéricos) */
/* eslint-disable camelcase */
const mySet1 = new Set();
mySet1.add(10);
mySet1.add(20);
mySet1.add(30);
mySet1.add(40);
mySet1.add(50);

function getValuesInRange(set, lower_value, upper_value) {
    const filteredValues = Array.from(set).filter(value => value >= lower_value && value <= upper_value);

    if (filteredValues.length > 0) {
        return filteredValues;
    } else {
        throw new Error('Error:not valid value.');
    }
}
console.log(getValuesInRange(mySet1, 0, 10));

module.exports = {
    getValuesInRange,
};
