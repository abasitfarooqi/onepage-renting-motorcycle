// products.js

// Function to fetch JSON data
async function fetchProducts() {
    try {
        const response = await fetch('products.json'); // Assuming your JSON file is named products.json
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render product cards
function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('Products container not found.');
        return;
    }

    // Clear existing content
    productsContainer.innerHTML = '';

    // Loop through products and create HTML for each product
    products.forEach(product => {
        const { id, name, image, price, details } = product;
        const { category, top_speed, engine, fuel_capacity, mpg, minimum_hire_period } = details;

        // Create HTML for each product card
        const productCardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card" onclick="showProduct('${id}')">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">For this or similar model, prices start from ${price} per Week</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${id}Modal">More Information</button>
                </div>
            </div>
        </div>
        <!-- ${name} Modal -->
        <div class="modal fade p-0" id="${id}Modal" tabindex="-1" aria-labelledby="${id}ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${id}ModalLabel">${name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="${image}" class="img-fluid rounded-start" alt="${name}">
                                </div>
                                <div class="col-md-6">
                                    <p><strong>CATEGORY:</strong> ${category}</p>
                                    <p><strong>TYPE:</strong> TWIST & GO (AUTOMATIC)</p>
                                    <ul>
                                        <li><strong>TOP SPEED:</strong> ${top_speed}</li>
                                        <li><strong>ENGINE:</strong> ${engine}</li>
                                        <li><strong>FUEL TANK CAPACITY:</strong> ${fuel_capacity}</li>
                                        <li><strong>MPG:</strong> ${mpg}</li>
                                        <li><strong>MINIMUM HIRE PERIOD:</strong> ${minimum_hire_period}</li>
                                    </ul>
                                    <p><strong>Requirements for Rental:</strong></p>
                                    <ul>
                                        <li>Driving Licence</li>
                                        <li>Proof of Address</li>
                                        <li>Proof of Identification</li>
                                        <li>Insurance Certification</li>
                                        <li>CBT Certification</li>
                                        <li>£300 deposit + 1 Week Rent</li>
                                        <li>6 Weeks Minimum Rental Period</li>
                                        <li>You need to bring a lock and chain before collecting the motorcycle. If you don't have one you can always purchase from our shop along with lot's of other motorcycle accessories.</li>
                                        <li>Insurance fire and theft is the minimum cover we accept. The motorcycle must be locked at all times.</li>
                                        <li>Any damage must be paid by you or a claim must be made under your insurance.</li>
                                        <li>You must give one week notice before returning the motorcycle or deposit will be lost.</li>
                                        <li>Deposit will be refunded provided there is no damage to the motorcycle and no accessories are missing.</li>
                                    </ul>
                                    <p><strong>£20 RESERVES THIS MOTORCYCLE FOR 48 HOURS</strong></p>
                                    <p>RESERVE FOR £20 or call 0208 314 1498</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Append product card HTML to products container
        productsContainer.innerHTML += productCardHTML;
    });
}

// Function to initialize
async function initializeProducts() {
    const products = await fetchProducts();
    renderProducts(products);
}

// Call initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});
