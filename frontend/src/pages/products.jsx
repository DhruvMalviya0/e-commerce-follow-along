import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav";
import ProductCard from "../components/ProductCard";

function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log('Fetching products...');
                const response = await fetch('http://localhost:8000/api/v2/product/get-products');
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log("Products API response:", data);

                // Check if data.product exists and is an array
                if (!data.product || !Array.isArray(data.product)) {
                    console.error("Invalid API response format:", data);
                    throw new Error("Invalid response format from server");
                }

                // Log the first product to check its structure
                if (data.product.length > 0) {
                    console.log("First product data:", data.product[0]);
                }

                // Ensure each product has an image array
                const processedProducts = data.product.map(product => ({
                    ...product,
                    image: Array.isArray(product.image) ? product.image : [product.image]
                }));

                setProducts(processedProducts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100">
                <Nav />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="text-xl">Loading products...</div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100">
                <Nav />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="text-xl text-red-500">Error: {error}</div>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
                
                {products.length === 0 ? (
                    <div className="text-center">
                        <p className="text-xl text-gray-600">No products found</p>
                        <button
                            onClick={() => navigate('/create-product')}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Add New Product
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product._id} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products; 