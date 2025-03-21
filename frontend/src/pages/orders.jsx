import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/nav';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const email = "dummy@gmail.com"; // Replace with actual user email

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v2/order/get-orders?email=${email}`);
                if (response.data.orders) {
                    setOrders(response.data.orders);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching orders:', err);
                setError(err.response?.data?.error || 'Failed to fetch orders');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [email]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <>
                <Nav />
                <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                    <div className="text-xl text-gray-600">Loading orders...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Nav />
                <div className="min-h-screen bg-gray-50 flex justify-center items-center">
                    <div className="text-xl text-red-600">{error}</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

                    {orders.length === 0 ? (
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <p className="text-gray-600">No orders found.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div key={order._id} className="bg-white rounded-lg shadow overflow-hidden">
                                    {/* Order Header */}
                                    <div className="bg-gray-50 px-6 py-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">Order ID: {order._id}</p>
                                                <p className="text-sm text-gray-600">Placed on: {formatDate(order.createdAt)}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                    order.orderStatus === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                    order.orderStatus === 'Shipped' ? 'bg-yellow-100 text-yellow-800' :
                                                    order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {order.orderStatus}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Items */}
                                    <div className="px-6 py-4">
                                        <div className="space-y-4">
                                            {order.orderItems.map((item) => (
                                                <div key={item._id} className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0 w-20 h-20">
                                                        <img
                                                            src={`http://localhost:8000${item.image}`}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover rounded"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = 'https://via.placeholder.com/80';
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                                        <p className="text-sm text-gray-600">
                                                            Quantity: {item.quantity} × ${item.price}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-medium text-gray-900">
                                                            ${(item.quantity * item.price).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="bg-gray-50 px-6 py-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Shipping Address</h3>
                                                <p className="text-sm text-gray-600">
                                                    {order.shippingAddress.address1}
                                                    {order.shippingAddress.address2 && `, ${order.shippingAddress.address2}`}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {order.shippingAddress.city}, {order.shippingAddress.country} {order.shippingAddress.zipCode}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-600">Total Amount</p>
                                                <p className="text-2xl font-bold text-gray-900">${order.totalAmount.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Orders; 