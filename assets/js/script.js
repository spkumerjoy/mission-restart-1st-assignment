const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => displayTrendingProducts(products));
};

const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById("trending");
    trendingContainer.innerHTML = "";
    const trendingProducts = products.slice(0, 3);
    trendingProducts.forEach((product) => {
        const card = document.createElement("div");
        card.className =
            "card bg-base-100 shadow-sm rounded-lg overflow-hidden flex flex-col";
        card.innerHTML = `
            <figure class="w-full h-56 md:h-64 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src="${product.image}"
                    alt="${product.title}" class="w-full h-full object-contain p-4" />
            </figure>
            <div class="card-body px-4 py-4 space-y-4 flex flex-col flex-1">
                <div class="flex justify-between align-between">
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
                    <button class="btn btn-soft btn-primary shadow rounded-lg flex-1 font-medium">
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
        trendingContainer.append(card);
    });
};
loadAllProducts();
