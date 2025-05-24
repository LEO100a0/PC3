function ConejosSection({ addToCart }) {
    const rabbitProducts = [
        {
            id: 9,
            name: "Alimento para conejos",
            description: "Mezcla balanceada de heno, vegetales y granos.",
            price: 12.99,
            image: "images/con1.webp"
        },
        {
            id: 10,
            name: "Jaula espaciosa",
            description: "Amplia jaula con área de descanso y comedero incluido.",
            price: 59.99,
            image: "images/con2.jpg"
        },
        {
            id: 11,
            name: "Juguete de madera",
            description: "Bloques de madera seguros para masticar.",
            price: 7.99,
            image: "images/con3.webp"
        },
        {
            id: 12,
            name: "Bebedero automático",
            description: "Dispensador de agua que mantiene el líquido fresco.",
            price: 15.99,
            image: "images/con4.webp"
        },
        {
            id: 25,
            name: "Túnel de juego",
            description: "Para esconderse y explorar, hecho de materiales seguros.",
            price: 18.99,
            image: "images/con5.webp"
        },
        {
            id: 26,
            name: "Heno premium",
            description: "Alimento esencial para la digestión de conejos.",
            price: 9.99,
            image: "images/con6.webp"
        },
        {
            id: 27,
            name: "Cepillo suave",
            description: "Para el cuidado del pelaje de tu conejo.",
            price: 6.99,
            image: "images/con7.jpg"
        },
        {
            id: 28,
            name: "Rampas de ejercicio",
            description: "Set de 3 rampas para crear un área de juego.",
            price: 22.99,
            image: "images/con8.webp"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-800">Productos para Conejos</h2>
            <div className="grid product-grid gap-6">
                {rabbitProducts.map(product => (
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