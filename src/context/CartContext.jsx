import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add Product
    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);

            if (exists) return prev;

            return [...prev, product];
        });
    };

    // Remove Product
    const removeFromCart = (id) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Clear Cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Check if product exists
    const isInCart = (id) => {
        return cartItems.some((item) => item.id === id);
    };

    // Total Price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);