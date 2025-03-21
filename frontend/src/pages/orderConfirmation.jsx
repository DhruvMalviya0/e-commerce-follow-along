import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../components/nav";

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const selectedAddress = location.state?.selectedAddress;
    const email = "dummy@gmail.com"; // Replace with actual user email

    useEffect(() => {
        if (!selectedAddress) {
            navigate('/cart');
            return;
        }

        // Fetch cart items
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v2/product/cartproducts?email=${email}`);
                if (response.data.cart && Array.isArray(response.data.cart)) {
                    const items = response.data.cart.map(item => ({
                        quantity: item.quantity,
                        ...item.productId
                    }));
                    setCartItems(items);
                    
                    // Calculate total amount
                    const total = items.reduce((sum, product) => 
                        sum + (product.price * product.quantity), 0
                    );
                    setTotalAmount(total);
                }
            } catch (err) {
                console.error("Error fetching cart items:", err);
                setError("Failed to load cart items");
            }
        };

        fetchCartItems();
    }, [selectedAddress, navigate, email]);

    const handlePlaceOrder = async () => {
        setLoading(true);
        setError(null);

        try {
            const orderData = {
                email: email,
                shippingAddress: selectedAddress,
                orderItems: cartItems.map(item => ({
                    product: item._id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                    image: item.images[0]
                })),
                totalAmount: totalAmount
            };

            const response = await axios.post(
                "http://localhost:8000/api/v2/order/create-order",
                orderData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.status === 201) {
                alert("Order placed successfully!");
                navigate('/orders'); // Redirect to orders page instead of home
            }
        } catch (error) {
            console.error("Error placing order:", error);
            setError(error.response?.data?.error || "Failed to place order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!selectedAddress) {
        return null;
    }

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Order Confirmation</h1>

                        {/* Order Items */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Items</h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center py-2 border-b last:border-0">
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                            <p className="text-sm text-gray-600">Price: ${item.price}</p>
                                        </div>
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                                <div className="mt-4 pt-4 border-t">
                                    <p className="text-lg font-semibold text-right">Total Amount: ${totalAmount.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">Shipping Address</h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-600">{selectedAddress.address1}</p>
                                {selectedAddress.address2 && (
                                    <p className="text-gray-600">{selectedAddress.address2}</p>
                                )}
                                <p className="text-gray-600">
                                    {selectedAddress.city}, {selectedAddress.country} {selectedAddress.zipCode}
                                </p>
                                <p className="text-gray-600">Address Type: {selectedAddress.addressType}</p>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => navigate('/cart')}
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handlePlaceOrder}
                                disabled={loading || cartItems.length === 0}
                                className={`px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 ${
                                    (loading || cartItems.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? 'Placing Order...' : 'Confirm Order'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation; 