// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Product from "../components/products";
import Nav from "../components/nav";
import axios from "../axiosConfig";

export default function Home() {
    const [products, setProducts] = useState([]); // Fixed variable name consistency
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("/api/v2/product/get-products");
                if (response.data && response.data.success) {
                    setProducts(response.data.products);
                } else {
                    setError("Failed to fetch products");
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.response?.data?.message || "Error fetching products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center text-white mt-10">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
    }

    return (
        <>
            <Nav />
            <div className="w-full min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 px-6 py-6">
                <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                    {products.length > 0 ? (
                        products.map((product) => <Product key={product._id} {...product} />)
                    ) : (
                        <div className="text-white text-center col-span-full">
                            No products available.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
