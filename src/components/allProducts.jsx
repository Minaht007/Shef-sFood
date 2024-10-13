"use client";
import Image from "next/image";
import allProd from "../../json/allProd.json";
import { useAppContext } from "../context/context";

const AllProducts = () => {
  const { selectProducts } = useAppContext([]);

  return (
    <div className="flex flex-col bg-mainColor layout">
      <ul className="flex flex-row flex-wrap justify-center">
        {allProd.map((product) => (
          <li
            key={product.id}
            className="flex flex-col sm:m-10 md:m-16 desk:m-20 border-0 rounded-sm"
            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="flex flex-col border-1 rounded-md bg-mainColor">
              <Image
                src={product.img}
                alt="df"
                width={300}
                height={250}
                className="w-[250px] h-[200px] desk:w-[350px] desk:h-[300px] pt-2 px-4 border-1 rounded-lg"
              />
              <p className="ml-4 pt-2 desk2XL:pt-2 desk2XL:ml-4 desk:text-2xl font-medium">
                {product.name}
              </p>
              <p className="ml-4 pt-2 desk:pt-2 desk:ml-4 desk:text-xl flex items-center pb-2">
                Вартість: {product.price} грн{" "} {product.units}                
              </p>
              <span
                  onClick={() => selectProducts(product)}
                  className="flex justify-end mr-4 cursor-pointer"
                >
                  <button type="submit" className="sm:px-2 sm:py-1 md:px-3 md:py-2 desk:px-4 desk:py-2 border-1 rounded-md bg-btmBg text-secondMainTextColor mb-4 ">
                    У кошик
                  </button>
                  
                </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;

{/* <svg className="w-6 h-6 fill-[#10b981]">
                    <use
                      xlinkHref="/icons/symbol-defs.svg#icon-add-cart"
                      className="fill-green"
                    />
                  </svg> */}
