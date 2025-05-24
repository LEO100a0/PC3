function PerrosSection({ addToCart }) {
    const dogProducts = [
        {
            id: 5,
            name: "Alimento para perros adultos",
            description: "Nutrición completa con carne real como primer ingrediente.",
            price: 22.99,
            image: "images/dog1.jpg"
        },
        {
            id: 6,
            name: "Correa resistente",
            description: "Correa de nylon reforzado de 2 metros de largo.",
            price: 14.99,
            image: "images/dog2.webp"
        },
        {
            id: 7,
            name: "Juguete de goma duradero",
            description: "Ideal para perros que muerden fuerte, resistente a roturas.",
            price: 9.99,
            image: "images/dog3.webp"
        },
        {
            id: 8,
            name: "Cama ortopédica",
            description: "Cama suave con soporte para articulaciones.",
            price: 49.99,
            image: "images/dog4.webp"
        },
        {
            id: 21,
            name: "Arnés ajustable",
            description: "Ergonómico y cómodo para paseos diarios.",
            price: 19.99,
            image: "images/dog5.png"
        },
        {
            id: 22,
            name: "Shampoo hipoalergénico",
            description: "Para pieles sensibles, con ingredientes naturales.",
            price: 12.99,
            image: "images/dog6.jpg"
        },
        {
            id: 23,
            name: "Hueso dental",
            description: "Reduce el sarro y mejora la salud bucal.",
            price: 7.99,
            image: "images/dog7.png"
        },
        {
            id: 24,
            name: "Chaleco reflectante",
            description: "Para mayor visibilidad en paseos nocturnos.",
            price: 24.99,
            image: "images/dog8.webp"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Productos para Perros</h2>
            <div className="grid product-grid gap-6">
                {dogProducts.map(product => (
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