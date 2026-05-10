import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaShoppingCart, FaHeart, FaAward } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        email: user?.email || '',
        photoURL: user?.photoURL || ''
    });

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Error logging out');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Please Log In</h1>
                    <p className="text-gray-600 mb-6">You need to be logged in to view your profile</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="btn btn-primary"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO title="Swiftcart | Profile" description="View and manage your profile information" />

            <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                        {/* Background Banner */}
                        <div className="h-32 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>                        {/* Profile Content */}
                        <div className="relative px-6 pb-6">
                            {/* Profile  Info */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 mb-8">
                                {/* Photo */}
                                <div className="shrink-0">
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                                            <FaUser className="text-white text-4xl" />
                                        </div>
                                    )}
                                </div>                                {/* User Info */}
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                        {user?.displayName || 'User Profile'}
                                    </h1>
                                    <p className="text-gray-600 flex items-center gap-2 mb-4">
                                        <FaEnvelope className="text-indigo-500" />
                                        {user?.email}
                                    </p>
                                    <div className="flex gap-3 flex-wrap">
                                        <button
                                            onClick={() => setIsEditing(!isEditing)}
                                            className="btn btn-sm btn-outline btn-primary gap-2"
                                        >
                                            <FaEdit /> Edit Profile
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-sm btn-outline btn-error gap-2"
                                        >
                                            {/* <FaLogout /> Logout */} Logout
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Edit Form */}
                            <div className={`mt- 8 p-6 bg-gray-50 rounded-xl border-2 border-indigo-200 transition-all duration-500 ease-in-out overflow-hidden ${isEditing
                                    ? 'max-h-96 opacity-100 visible'
                                    : 'max-h-0 opacity-0 invisible'
                                }`}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Your Profile</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Display Name
                                        </label>
                                        <input
                                            type="text"
                                            name="displayName"
                                            value={formData.displayName}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Profile Photo URL
                                        </label>
                                        <input
                                            type="text"
                                            name="photoURL"
                                            value={formData.photoURL}
                                            onChange={handleInputChange}
                                            className="input input-bordered w-full"
                                            placeholder="Enter image URL"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="btn btn-primary">Save Changes</button>
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="btn btn-outline"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Orders Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Total Orders</p>
                                    <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
                                </div>
                                <div className="p-4 bg-blue-100 rounded-full">
                                    <FaShoppingCart className="text-blue-600 text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Wishlist Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Wishlist Items</p>
                                    <p className="text-3xl font-bold text-gray-800 mt-2">8</p>
                                </div>
                                <div className="p-4 bg-red-100 rounded-full">
                                    <FaHeart className="text-red-600 text-2xl" />
                                </div>
                            </div>
                        </div>

                        {/* Loyalty Points Card */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium">Loyalty Points</p>
                                    <p className="text-3xl font-bold text-gray-800 mt-2">450</p>
                                </div>
                                <div className="p-4 bg-yellow-100 rounded-full">
                                    <FaAward className="text-yellow-600 text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Details Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Information */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <FaUser className="text-indigo-500 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Full Name</p>
                                            <p className="text-gray-800 font-medium">{user?.displayName || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaEnvelope className="text-indigo-500 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Email Address</p>
                                            <p className="text-gray-800 font-medium">{user?.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPhone className="text-indigo-500 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Phone Number</p>
                                            <p className="text-gray-800 font-medium">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Address</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Address</p>
                                            <p className="text-gray-800 font-medium">123 Main Street</p>
                                            <p className="text-gray-800 font-medium">New York, NY 10001</p>
                                            <p className="text-gray-800 font-medium">United States</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 btn btn-sm btn-outline">Edit Address</button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Orders</h2>

                        <div className="space-y-4">
                            {[1, 2, 3].map((order) => (
                                <div key={order} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                                    <div>
                                        <p className="font-semibold text-gray-800">Order #{12345 + order}</p>
                                        <p className="text-gray-500 text-sm">Placed on May {10 - order}, 2026</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-800">${(150 + order * 20).toFixed(2)}</p>
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">Delivered</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 btn btn-outline w-full">View All Orders</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;