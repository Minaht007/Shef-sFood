"use client"
import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export function AppWrapper({ children }) {

    const [prodForCart, setProdForCart] = useState([]);

    console.log(prodForCart)

    const selectProducts = (product) => {
        setProdForCart([...prodForCart, product]);
    };

    return (
        <AppContext.Provider value={{ prodForCart: prodForCart, selectProducts: selectProducts }}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    const context = useContext(AppContext);
    return context;
}