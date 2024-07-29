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
        updatedCart[productId].quantity += 1;
      } else {
        updatedCart[productId] = { ...product, quantity: 1 };
      }

      return updatedCart;
    });
  };

  const totalPrice = () => {
    return Object.values(prodForCart).reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const updateProductQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeProductFromCart(productId);
    } else {
      setProdForCart((prevCart) => ({
        ...prevCart,
        [productId]: {
          ...prevCart[productId],
          quantity: quantity,
        },
      }));
    }
  };

  const removeProductFromCart = (productId) => {
    setProdForCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };


  return (
    <AppContext.Provider
      value={{
        prodForCart: prodForCart,
        selectProducts: selectProducts,
        totalPrice: totalPrice,
        updateProductQuantity: updateProductQuantity,
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


  // const totalPrice = () => {
  //   let total = 0;
  //   Object.keys(prodForCart).forEach((productId) => {
  //     total += prodForCart[productId].price * prodForCart[productId].quantity;
  //   });
  //   return total;
  // };