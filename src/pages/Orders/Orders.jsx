import React, { useMemo, useState } from 'react';
import SEO from '../../components/SEO/SEO';
import useAuth from '../../hooks/useAuth';
import { FaSearch, FaBoxOpen, FaClipboardList, FaRedo, FaTimes } from 'react-icons/fa';

const mockOrders = [
    {
        id: 'ORD-1001',
        date: '2026-05-01',
        total: 129.99,
        status: 'Delivered',
        items: [
            { name: 'Wireless Headphones', qty: 1, price: 79.99 },
            { name: 'USB-C Cable', qty: 2, price: 25.0 },
        ],
        shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' },
    },
    { id: 'ORD-1002', date: '2026-04-21', total: 59.49, status: 'Processing', items: [{ name: 'Yoga Mat', qty: 1, price: 59.49 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1003', date: '2026-03-18', total: 220.0, status: 'Cancelled', items: [{ name: 'Running Shoes', qty: 2, price: 110.0 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1004', date: '2026-02-05', total: 18.0, status: 'Delivered', items: [{ name: 'Notebook', qty: 1, price: 18.0 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },

    // Additional 10 orders
    { id: 'ORD-1005', date: '2026-01-20', total: 45.0, status: 'Delivered', items: [{ name: 'Phone Case', qty: 1, price: 15.0 }, { name: 'Screen Protector', qty: 2, price: 15.0 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1006', date: '2025-12-15', total: 349.99, status: 'Delivered', items: [{ name: 'Smartwatch', qty: 1, price: 349.99 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1007', date: '2025-11-30', total: 24.99, status: 'Processing', items: [{ name: 'Travel Mug', qty: 1, price: 24.99 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1008', date: '2025-10-10', total: 89.5, status: 'Cancelled', items: [{ name: 'Bluetooth Speaker', qty: 1, price: 89.5 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1009', date: '2025-09-22', total: 14.99, status: 'Delivered', items: [{ name: 'Socks (3-pack)', qty: 1, price: 14.99 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1010', date: '2025-08-05', total: 199.99, status: 'Processing', items: [{ name: 'External SSD', qty: 1, price: 199.99 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1011', date: '2025-07-18', total: 39.95, status: 'Delivered', items: [{ name: 'Kitchen Knife Set', qty: 1, price: 39.95 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1012', date: '2025-06-01', total: 12.0, status: 'Delivered', items: [{ name: 'Stationery Pack', qty: 1, price: 12.0 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1013', date: '2025-05-14', total: 499.0, status: 'Cancelled', items: [{ name: 'Gaming Chair', qty: 1, price: 499.0 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
    { id: 'ORD-1014', date: '2025-04-02', total: 7.99, status: 'Delivered', items: [{ name: 'USB Flash Drive', qty: 1, price: 7.99 }], shipping: { name: 'John Doe', address: '123 Main Street, New York, NY' } },
];

const statusColors = {
    Delivered: 'bg-green-100 text-green-800',
    Processing: 'bg-yellow-100 text-yellow-800',
    Cancelled: 'bg-red-100 text-red-800',
};

const Orders = () => {
    const { user } = useAuth();
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('newest');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = useMemo(() => {
        let data = mockOrders.slice();
        if (filter !== 'all') data = data.filter(o => o.status === filter);
        if (query) data = data.filter(o => o.id.toLowerCase().includes(query.toLowerCase()));
        if (sort === 'newest') data.sort((a, b) => (a.date < b.date ? 1 : -1));
        else data.sort((a, b) => (a.date > b.date ? 1 : -1));
        return data;
    }, [query, filter, sort]);

    return (
        <>
            <SEO title="Swiftcart | Orders" description="Your recent orders at a glance" noindex={true} />

            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
                            <p className="text-gray-500 text-sm">Review your recent purchases and order status</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center bg-white rounded-lg shadow-sm px-3 py-2">
                                <FaSearch className="text-gray-400 mr-2" />
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="input input-ghost w-48 sm:w-64 p-0"
                                    placeholder="Search by order id..."
                                />
                            </div>

                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="select select-bordered select-sm"
                            >
                                <option value="all">All</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Processing">Processing</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>

                            <select value={sort} onChange={(e) => setSort(e.target.value)} className="select select-bordered select-sm">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First </option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {orders.length === 0 ? (
                            <div className="bg-white rounded-xl shadow p-8 text-center">
                                <FaClipboardList className="mx-auto text-3xl text-gray-400 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800">No orders yet</h3>
                                <p className="text-gray-500">Looks like you haven't placed any orders. Start shopping to see them here.</p>
                            </div>
                        ) : (
                            orders.map((o) => (
                                <div key={o.id} className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                                            <FaBoxOpen className="text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{o.id}</p>
                                            <p className="text-sm text-gray-500">Placed on {o.date} • {o.items.length} item(s)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[o.status] || 'bg-gray-100 text-gray-800'}`}>
                                            {o.status}
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800">${o.total.toFixed(2)}</p>
                                            <p className="text-sm text-gray-500">Total</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button onClick={() => setSelectedOrder(o)} className="btn btn-sm btn-outline">View Details</button>
                                            <button className="btn btn-sm btn-primary gap-2"><FaRedo /> Reorder</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* Order Details Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedOrder(null)} />
                    <div className="relative w-full max-w-2xl mx-4">
                        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-200 scale-100">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Order Details — {selectedOrder.id}</h3>
                                    <p className="text-sm text-gray-500">Placed on {selectedOrder.date}</p>
                                </div>
                                <button onClick={() => setSelectedOrder(null)} className="btn btn-ghost btn-sm">
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Shipping</h4>
                                    <p className="text-gray-800">{selectedOrder.shipping?.name}</p>
                                    <p className="text-gray-600 text-sm">{selectedOrder.shipping?.address}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Summary</h4>
                                    <p className="text-gray-800 font-semibold">${selectedOrder.total.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500">Status: {selectedOrder.status}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Items</h4>
                                <div className="space-y-3">
                                    {selectedOrder.items.map((it, idx) => (
                                        <div key={idx} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-gray-800">{it.name}</p>
                                                <p className="text-sm text-gray-500">Qty: {it.qty}</p>
                                            </div>
                                            <p className="text-gray-800 font-medium">${(it.price * it.qty).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button onClick={() => setSelectedOrder(null)} className="btn btn-outline">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Orders;