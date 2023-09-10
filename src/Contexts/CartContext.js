import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const addToCart = (item) => {
    console.log(item);
    console.log(item.cost);
    setCartItems([...cartItems, item]);
    setTotalItems((totalItems) => totalItems + 1);
    setSubTotal((subTotal) => subTotal + item.price);
  };

  const removeFromCart = (itemId) => {
    const removedItem = cartItems.find((item) => item.id === itemId);
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setTotalItems((totalItems) => totalItems - 1);
    setSubTotal((subTotal) => subTotal - removedItem.price);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItems, subTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
