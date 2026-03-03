import { useState } from "react";

const CheckoutFloatingForm = ({ isOpen, onClose, onSubmit }) => {
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = customerName.trim();
        const address = customerAddress.trim();
        const phone = customerPhone.trim();

        if (!name || !address || !phone) {
            setError("Please fill in all fields.");
            return;
        }

        onSubmit({
            customerName: name,
            customerAddress: address,
            customerPhone: phone,
        });

        setCustomerName("");
        setCustomerAddress("");
        setCustomerPhone("");
        setError("");
        onClose();
    };

    const handleClose = () => {
        setError("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-800">Customer Information</h3>
                <p className="mt-1 text-sm text-slate-500">Please provide details to place your order.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(event) => setCustomerName(event.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Address</label>
                        <textarea
                            value={customerAddress}
                            onChange={(event) => setCustomerAddress(event.target.value)}
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter your delivery address"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                        <input
                            type="tel"
                            value={customerPhone}
                            onChange={(event) => setCustomerPhone(event.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {error ? <p className="text-sm font-medium text-red-500">{error}</p> : null}

                    <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={handleClose} className="btn btn-ghost">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary text-white">
                            Confirm Checkout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutFloatingForm;
