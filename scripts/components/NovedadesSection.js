function NovedadesSection({ addToCart }) {
    const products = [
        {
            id: 101,
            name: "Nuevo alimento premium para gatos",
            description: "Formulado con ingredientes naturales para una nutrición completa.",
            price: 24.99,
            image: "images/nov1.webp"
        },
        {
            id: 102,
            name: "Juguete interactivo para perros",
            description: "Mantén a tu perro entretenido y estimulado mentalmente.",
            price: 15.99,
            image: "images/nov2.webp"
        },
        {
            id: 103,
            name: "Jaula moderna para hámsters",
            description: "Diseño innovador con múltiples niveles y accesorios incluidos.",
            price: 39.99,
            image: "images/nov3.webp"
        },
        {
            id: 104,
            name: "Cama térmica para mascotas",
            description: "Mantiene el calor ideal para mascotas pequeñas en invierno.",
            price: 29.99,
            image: "images/nov4.jpg"
        },
        {
            id: 105,
            name: "Comedero automático inteligente",
            description: "Programa horarios de alimentación para tu mascota.",
            price: 59.99,
            image: "images/nov5.webp"
        },
        {
            id: 106,
            name: "Kit de aseo completo",
            description: "Incluye cepillo, peine, cortauñas y shampoo especial.",
            price: 34.99,
            image: "images/nov6.jpg"
        },
        {
            id: 107,
            name: "Collar LED para mascotas",
            description: "Collar luminoso para mayor visibilidad en la oscuridad.",
            price: 12.99,
            image: "images/nov7.webp"
        },
        {
            id: 108,
            name: "Set de juguetes acuáticos",
            description: "Perfecto para perros que aman el agua y la playa.",
            price: 18.99,
            image: "images/nov8.jpg"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Novedades en PetStore</h2>
            <div className="grid product-grid gap-6">
                {products.map(product => (
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