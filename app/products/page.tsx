import React from 'react';

type Product = {
    id: number; 
    title: string; 
    price: number; 
    description: string; 
}; 

export default async function ProductsPage() {
    try {
        const response = await fetch("http://localhost:3001/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products: Product[] = await response.json();

        return (
            <ul className="space-y-4">
                {products.map((product) => (
                    <li 
                        key={product.id} 
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">${product.price}</p>
                    </li>
                ))}
            </ul>
        );
    } catch (error) {
        console.error("Error fetching products:", error);
        return <p className="text-red-500">Failed to load products.</p>;
    }
}
