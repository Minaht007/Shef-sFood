"use client";
const { useEffect } = require("react");

const useSaveLocalCart = (key, value) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
};

export default useSaveLocalCart;
