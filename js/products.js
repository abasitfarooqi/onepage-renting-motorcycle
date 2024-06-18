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

        // Create HTML for each product card with Font Awesome icons
        const productCardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card" onclick="showProduct('${id}')"  data-bs-toggle="modal" data-bs-target="#${id}Modal">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">For this or similar model, prices start from £${price} per Week</p>
                    <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#${id}Modal">More Information</button>
                </div>
            </div>
        </div>
        <!-- ${name} Modal -->
        <div class="modal fade p-0" id="${id}Modal" tabindex="-1" aria-labelledby="${id}ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
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
                                
                                    <p class="p-0"><strong>Category:</strong> <span class="badge bg-primary">${category}</span> </p>
                                    <p class="p-0"><strong>Vehicle Type:</strong> <span class="badge bg-info">TWIST & GO (AUTOMATIC)</span></p>
                                   <ul class="list-unstyled">
                                        <li><i class="fas fa-tachometer-alt"></i> <strong>Top Speed:</strong> ${top_speed}</li>
                                        <li><i class="fas fa-cogs"></i> <strong>Engine:</strong> ${engine}</li>
                                        <li><i class="fas fa-gas-pump"></i> <strong>Fuel Tank Capacity:</strong> ${fuel_capacity}</li>
                                        <li><i class="fas fa-gas-pump"></i> <strong>MPG:</strong> ${mpg}</li>
                                        <li><i class="fas fa-calendar-alt"></i> <strong>Minimum Hire Period:</strong> ${minimum_hire_period}</li>
                                    </ul>
                                    <h2>Requirements for Rental:</h2>
                                    <ul class="list-unstyled">
                                        <li><i class="fas fa-check"></i> Driving Licence</li>
                                        <li><i class="fas fa-check"></i> Proof of Address</li>
                                        <li><i class="fas fa-check"></i> Proof of Identification</li>
                                        <li><i class="fas fa-check"></i> Insurance Certification</li>
                                        <li><i class="fas fa-check"></i> CBT Certification</li>
                                        <li><i class="fas fa-check"></i> £300 deposit + 1 Week Rent</li>
                                        <li><i class="fas fa-check"></i> 6 Weeks Minimum Rental Period</li>
                                        <li><i class="fas fa-check"></i> You need to bring a lock and chain before collecting the motorcycle. If you don't have one you can always purchase from our shop along with lot's of other motorcycle accessories.</li>
                                        <li><i class="fas fa-check"></i> Insurance fire and theft is the minimum cover we accept. The motorcycle must be locked at all times.</li>
                                        <li><i class="fas fa-check"></i> Any damage must be paid by you or a claim must be made under your insurance.</li>
                                        <li><i class="fas fa-check"></i> You must give one week notice before returning the motorcycle or deposit will be lost.</li>
                                        <li><i class="fas fa-check"></i> Deposit will be refunded provided there is no damage to the motorcycle and no accessories are missing.</li>
                                    </ul>
                                    <p><strong>£20 RESERVES THIS MOTORCYCLE FOR 48 HOURS</strong></p>
                                    <p class="bg-primary text-white p-2">RESERVE FOR £20 or call 0208 314 1498</p>
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
