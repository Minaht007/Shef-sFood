"use client"
import AllProducts from "./allProducts";
import { useAppContext } from "../context/context";

const Cart = () => {
  const { prodForCart } = useAppContext([]);
  console.log(prodForCart);

  return (
    <div>
    <AllProducts />
    <ul>
      {Object.keys(prodForCart).map((productId) => (
        <li key={productId} className="flex flex-col w-100 h-120">
          {prodForCart[productId].name} - {prodForCart[productId].price} грн x {prodForCart[productId].quantity}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Cart;
