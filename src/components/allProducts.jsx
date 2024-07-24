"use client";
import Image from "next/image";
import allProd from "../../json/allProd.json";
import { useAppContext } from "../context/context";


const AllProducts = () => {

  const { selectProducts } = useAppContext([]);

  console.log(selectProducts)

  return (
    <div className="flex flex-row bg-mainColor layout">
      <ul className="flex flex-row flex-wrap justify-center">
        {allProd.map((product) => (
          <li
            key={product.id}
            className="flex flex-col m-20 border-0 rounded-sm"
            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="flex flex-col border-1 rounded-md bg-mainColor">
              <Image
                src={product.img}
                alt="df"
                width={300}
                height={300}
                className="desk2XL:w-[350px] desk2XL:h-[350px] pt-4 px-4 border-1 rounded-lg"
              />
              <p className="desk2XL:pt-2 desk2XL:ml-4 desk2XL:text-2xl font-medium">
                {product.name}
              </p>
              <p className="desk2XL:pt-2 desk2XL:ml-4 desk2XL:text-xl flex items-center pb-4">
                Вартість: {product.price} грн{" "}
                <span
                  onClick={() => selectProducts(product)}
                  className="ml-[3%] cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-[#10b981]">
                    <use
                      xlinkHref="/icons/symbol-defs.svg#icon-add-cart"
                      className="fill-green"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;

