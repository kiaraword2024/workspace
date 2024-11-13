/* Pide información con fetch a la url:
https://jsonplaceholder.typicode.com/posts/1. Loguea el status de
la petición e imprime por pantalla el contenido del artículo que has
recibido. */
/*eslint-disable camelcase */ 

 async function peticion() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Status:', response.status);

    if (response.ok) {
        let json = await response.json();
        document.getElementById('result').innerText = JSON.stringify(json, null, 2);
    } else {
        alert("Error-HTTP: " + response.status);
    }
}
peticion();
