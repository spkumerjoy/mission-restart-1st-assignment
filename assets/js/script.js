const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => {
            displayTrendingProducts(products);
            displayAllProducts(products);
        });
};

const createProductCard = (product) => {
    const card = document.createElement("div");
    card.className =
        "card bg-base-100 shadow-sm rounded-lg overflow-hidden flex flex-col";
    card.innerHTML = `
            <figure class="w-full h-56 md:h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="${product.image}"
                    alt="${product.title}" class="w-full h-full object-contain p-4" />
            </figure>
            <div class="card-body px-4 py-4 space-y-4 flex flex-col flex-1">
                <div class="flex justify-between items-center">
                    <div class="badge bg-primary-content text-primary rounded-xl text-sm">${product.category}</div>
                    <div class="flex justify-center items-center">
                        <i class="fa-solid fa-star text-amber-400 mr-1"></i>
                        <p class="text-gray-400">${product.rating.rate} (${product.rating.count})</p>
                    </div>
                </div>
                <div class="text-lg">
                    <h2 class="font-medium truncate">
                        ${product.title} 
                    </h2>
                    <h2 class="font-bold">
                        $${product.price}
                    </h2>
                </div>
                <div class="flex gap-5">
                    <button class="btn btn-soft btn-primary shadow rounded-lg flex-1 font-medium" onclick="loadProductDetails(${product.id})">
                        <i class="fa-regular fa-eye"></i>
                        Details
                    </button>
                    <button
                        class="btn btn-soft bg-primary hover:bg-primary-content hover:text-primary text-white border-none shadow rounded-lg flex-1 font-medium">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add
                    </button>
                </div>
            </div>
    `;
    return card;
};

const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById("trending");
    if (!trendingContainer) return;
    trendingContainer.innerHTML = "";

    const trendingProducts = products.slice(0, 3);
    trendingProducts.forEach((product) => {
        trendingContainer.append(createProductCard(product));
    });
};

const loadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((categories) => displayCategories(categories));
};

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    if (!categoryContainer) return;
    categoryContainer.innerHTML = "";
    categoryContainer.innerHTML = `
        <button class="btn btn-outline btn-primary category-btn btn-sm rounded-2xl btn-active">
            All
        </button>
    `;
    const allBtn = categoryContainer.querySelector(".category-btn");

    allBtn.addEventListener("click", () => {
        const allButtons = categoryContainer.querySelectorAll(".category-btn");

        allButtons.forEach((btn) => btn.classList.remove("btn-active"));
        allBtn.classList.add("btn-active");

        loadAllProducts(); // show all products again
    });

    for (let category of categories) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button class="btn btn-outline btn-primary category-btn btn-sm rounded-2xl">
                ${category}
            </button>
        `;
        const categoryButton = btnDiv.querySelector("button");
        categoryButton.addEventListener("click", () => {
            // remove active from all buttons
            const allButtons =
                categoryContainer.querySelectorAll(".category-btn");
            allButtons.forEach((btn) => btn.classList.remove("btn-active"));
            // add active to clicked button
            categoryButton.classList.add("btn-active");
            // load words
            loadCategoryProduct(category);
        });
        categoryContainer.append(btnDiv);
    }
};

const loadCategoryProduct = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((products) => displayAllProducts(products));
};

const displayAllProducts = (products) => {
    const allProductsContainer = document.getElementById("our-products");
    if (!allProductsContainer) return;
    allProductsContainer.innerHTML = "";
    products.forEach((product) => {
        allProductsContainer.append(createProductCard(product));
    });
};

const loadProductDetails = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const details = await res.json();
    displayModalDetails(details);
};

const displayModalDetails = (product) => {
    const detailsModal = document.getElementById("modal-container");
    detailsModal.innerHTML = `
        <div class="card-body px-4 py-4 space-y-4 flex flex-col flex-1">
            <div class="text-lg">
                <h2 class="font-semibold">
                    ${product.title} 
                </h2>
                <p class="text-sm">
                    ${product.description}
                </p>
            </div>
            <div class="flex justify-around align-between">
                <div class="badge bg-primary-content text-primary rounded-xl text-lg">$${product.price}</div>
                <div class="flex justify-center items-center text-lg">
                    <i class="fa-solid fa-star text-amber-400 mr-1"></i>
                    <p class="text-gray-400">${product.rating.rate} (${product.rating.count})</p>
                </div>
            </div>
            <div class="flex gap-5">
                <button
                    class="btn btn-soft bg-primary hover:bg-primary-content hover:text-primary text-white border-none shadow rounded-lg flex-1 font-medium">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    document.getElementById("product_modal").showModal();
};

loadAllProducts();
loadCategories();
