const container = document.getElementById('container');

const url = 'http://localhost:9000/api/v1/items/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const title = `<h1>${item.name}</h1>`;
            const image = `<img src="${item.image}" alt="${item.name} image">`;
            const description = `<p>${item.description}</p>`;
            const price = `<h2>$${item.price}</h2>`;
            const stock = `<p>Quedan ${item.stock}!</p>`;

            container.insertAdjacentHTML('beforeend', title);
            container.insertAdjacentHTML('beforeend', price);
            container.insertAdjacentHTML('beforeend', description);
            container.insertAdjacentHTML('beforeend', image);
            container.insertAdjacentHTML('beforeend', stock);
        })
    })
    .catch(err => console.log(err));
