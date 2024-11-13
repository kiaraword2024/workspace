
/* Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
número del artículo que se recibe. 101 */

let articleNumber = parseFloat(prompt('Enter the number of the article you want to read (1-100)'));

if (!isNaN(articleNumber) && articleNumber > 0 && articleNumber <= 100) {
    async function peticion(articleNumber) {
        let url = 'https://jsonplaceholder.typicode.com/posts/' + articleNumber;
        let response = await fetch(url);

        if (response.ok) {
            let json = await response.json();
            document.getElementById('result').innerText = JSON.stringify(json, null, 2);
            console.log('Status:', response.status);
        } else {
            alert('Error-HTTP: ' + response.status + '. Please enter a number from 1 to 100.');
        }
    }

    peticion(articleNumber);
} else {
    alert('Please enter a valid number between 1 and 100.');
}
