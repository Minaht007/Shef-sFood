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
        {prodForCart.map((product) => (
          <li key={product.id} className="flex flex-col w-100 h-120">
            {product.name} - {product.price} грн
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
