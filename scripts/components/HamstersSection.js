function HamstersSection({ addToCart }) {
    const hamsterProducts = [
        {
            id: 13,
            name: "Alimento para hámsters",
            description: "Mezcla de semillas, granos y frutas secas.",
            price: 8.99,
            image: "images/h1.jpg"
        },
        {
            id: 14,
            name: "Rueda de ejercicio silenciosa",
            description: "Rueda que no hace ruido para ejercicio nocturno.",
            price: 19.99,
            image: "images/h2.jpg"
        },
        {
            id: 15,
            name: "Casa de madera",
            description: "Pequeña casa para esconderse y dormir.",
            price: 12.99,
            image: "images/h3.jpg"
        },
        {
            id: 16,
            name: "Túnel de plástico",
            description: "Set de túneles para explorar y jugar.",
            price: 14.99,
            image: "images/h4.webp"
        },
        {
            id: 29,
            name: "Comedero de cerámica",
            description: "Pesa lo suficiente para no volcarse fácilmente.",
            price: 5.99,
            image: "images/h5.jpg"
        },
        {
            id: 30,
            name: "Columpio para jaula",
            description: "Divierte a tu hámster con este columpio seguro.",
            price: 7.99,
            image: "images/h6.webp"
        },
        {
            id: 31,
            name: "Snacks naturales",
            description: "Golosinas saludables para premiar a tu mascota.",
            price: 4.99,
            image: "images/h7.jpg"
        },
        {
            id: 32,
            name: "Kit de limpieza",
            description: "Incluye cepillo, pala y productos de limpieza seguros.",
            price: 11.99,
            image: "images/h8.webp"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Productos para Hámsters</h2>
            <div className="grid product-grid gap-6">
                {hamsterProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden pet-card">
                        <img src={product.image} 
                             alt={product.name} 
                             className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.description}</p>
                            <div className="flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
                                <span className="font-bold text-blue-600 text-sm sm:text-base">${product.price.toFixed(2)}</span>
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}