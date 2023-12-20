const ceramicPortfolio = document.getElementById('ceramic-portfolio');
const main = document.querySelector('main')

async function getCeramicProducts() {
    const response = await fetch('./data/products.json');

    if (response.ok) {
        // hämta array
        const products = await response.json();
        // loopa igenom arrayen
        const filteredProducts = products
            .filter(product => product.category === 'ceramic');
        
        const productResults = filteredProducts.map((product, index) => `
            <section class="card">
                <h4>${product.name}</h4>
                <img img loading="lazy" src="${product.image}" alt="">
                <button class="button" id="openModalBtn${index + 1}">Läs mer</button>
            </section>`
        );

        ceramicPortfolio.innerHTML = productResults.join('');

        const modalResults = filteredProducts.map((product, index) => `
            <div class="modal" id="myModal${index + 1}">
                <div class="modal-content">
                    <span class="close" id="closeModalBtn${index + 1}">x</span>
                    <h4>${product.name}</h4>
                    <img img loading="lazy" src="${product.image}" alt="">
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                </div>
            </div>`
        );

        main.innerHTML += modalResults.join('');
    } else {
        console.log(`HTTP error message: ${response.status}`);
    }
    getModals();
}

getCeramicProducts();
