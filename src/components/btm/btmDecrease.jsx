
import { useAppContext } from "../../context/context";

const BtmDecrease =({ productId }) => {

    const { prodForCart, updateProductQuantity } = useAppContext();
    const product = prodForCart[productId];
  
    const decreaseQuantity = () => {
      if (product) {     
        updateProductQuantity(productId, product.quantity - 1);
      }
    };

    return (
        <button type="button" onClick={decreaseQuantity}>
            <svg className="w-8 h-8 fill-[#dc2626]">
                <use xlinkHref="/icons/symbol-defs.svg#icon-minus" />
            </svg>
        </button>
    )

}

export default BtmDecrease