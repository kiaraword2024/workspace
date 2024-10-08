
const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds',likes:},
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

function login(firstname, lastname) {
  const user = persons.find(
    (persons) => persons.firstname === firstname && persons.lastname === lastname,
  );
  if (user) {
    return ('ok');
  }
  return ('No login');
}
console.log(login('Montse', 'Reynolds')); 
