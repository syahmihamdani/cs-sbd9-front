import React from "react";
import Navbar from "../components/Navbar";

function Cart() {

    return (
        <div id="home" className="min-h-screen bg-gray-100 dark:bg-color-darkblue transition">
            <Navbar />
            <main className="px-10 w-screen">
                <h1 id="cart" className="text-2xl font-bold mt-10 mb-10 text-black text-center dark:text-white width-full">Your Shopping Cart</h1>
                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white p-4 rounded shadow dark:bg-color-purple">
                        <div>
                            <h2 className="text-lg font-semibold text-black dark:text-white">Dummy Item</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-200">Quantity: 1</p>
                            <p className="text-sm text-gray-600 dark:text-gray-100">Price: $0.69</p>
                        </div>
                        <button className="text-red-500 hover:underline text-sm">Remove</button>
                    </div>
                </div>
                <div className="text-right mt-6">
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                        Checkout
                    </button>
                </div>
            </main>
        </div>

    );
}

export default Cart;
