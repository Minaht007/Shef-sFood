"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [prodForCart, setProdForCart] = useState([]);

  console.log(prodForCart);

  const selectProducts = (product) => {
    setProdForCart((prev) => {
      const productId = product.id;
      const updatedCart = { ...prev };
      if (updatedCart[productId]) {
        updatedCart[productId].quantity++;
      } else {
        updatedCart[productId] = { ...product, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const totalPrice = () => {
    let total = 0;
    Object.keys(prodForCart).forEach((productId) => {
      total += prodForCart[productId].price * prodForCart[productId].quantity;
    });
    return total;
  };

  return (
    <AppContext.Provider
      value={{
        prodForCart: prodForCart,
        selectProducts: selectProducts,
        totalPrice: totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
