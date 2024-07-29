"use client"

import { useAppContext } from "../../context/context";

const BtmIncrease = ({ productId }) => {
  const { prodForCart, updateProductQuantity } = useAppContext();
  const product = prodForCart[productId];

  const increaseQuantity = () => {
    if (product) {     
      updateProductQuantity(productId, product.quantity + 1);
    }
  };

  return (
    <button type="button" onClick={increaseQuantity}>
      <svg className="w-6 h-6 fill-[#22c55e]">
        <use xlinkHref="/icons/symbol-defs.svg#icon-add-cart" />
      </svg>
    </button>
  );
};

export default BtmIncrease;
