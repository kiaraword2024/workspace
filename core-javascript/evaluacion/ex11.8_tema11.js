/* Modifica el ejercicio anterior y recibe la lista de todos los artículos.
¿Cuántos hay?¿Y hacer una tabla con los
títulos y los contenidos? */
/*eslint-disable camelcase */ 
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Error-HTTP: ' + response.status );
        }

        const total = await response.json();
        document.getElementById('total').innerText = 'Total number of items: ' + total.length;

        const postTitlesList = document.getElementById('post-titles');
        total.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postTitlesList.appendChild(listItem);
        });

        const table = document.createElement('table');
        table.innerHTML = '<thead><tr><th>Titles</th><th>Body</th></tr></thead><tbody></tbody>';
        const tbody = table.querySelector('tbody');

        total.forEach(function(article) {
            const row = document.createElement('tr');
            row.innerHTML = '<td>' + article.title + '</td><td>' + article.body + '</td>';
            tbody.appendChild(row);
        });

        document.getElementById('articles').appendChild(table);

    } catch (error) {
        console.error('There was a problem with the request:', error);
        alert('Error-HTTP: ' + response.status );
    }
}

fetchPosts();
