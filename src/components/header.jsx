"use client";
import Image from "next/image";
import Logo from "../../public/img/basketWithFoodLogo.jpg";
import Menu from "./menu";
import { useState } from "react";
import { useAppContext } from "../context/context";
import ModalWind from "./modalWind";
import useSaveLocalCart from "../hooks/saveCart";

import СountIncrease from "./btm/btmIncrease";
import СountDecrease from "./btm/btmDecrease";

const inputStyle =
  "desk:w-[400px] py-3 pl-2 mt-1 border-[1px] border-linksTextColor hover:border-inputHoverColor focus:border-red-400";

const Header = () => {
  const { prodForCart, totalPrice } = useAppContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const onClickOutside = (e) => {
  //   setIsModalOpen(false);
  // };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useSaveLocalCart("myCart", prodForCart);

  const basketIsActive = () => {
    return prodForCart.length === 0
      ? "flex desk:w-16 desk:h-16 border-0 rounded-full"
      : "flex desk:w-16 desk:h-16 border-4 border-[#ef4444] rounded-full";
  };

  console.log(basketIsActive);

  return (
    <div className="flex flex-col mx-auto  sticky top-0 left-0  bg-mainColor layout z-10">
      <div className="flex flex-row items-center ">
        <div className="flex px-16 py-3">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={200}
            className="border-0 rounded-md w-[40px] h-60px desk:w-[80px] desk:h-[80px] deskXL:w-[100px] deskXL:h-[100px]  "
          />
        </div>

        <div className="flex  mx-auto">
          <p className="text-xl">Про нас</p>
          <p className="text-xl px-10">Доставки</p>
          <p className="text-xl">Розрахунок</p>
          <p className="text-xl pl-10">Правила</p>
        </div>

        <div className="pr-6" onClick={toggleModal}>
          <svg className={basketIsActive()}>
            <use xlinkHref="/img/sprite/symbol-defs.svg#icon-basket-cart" />
          </svg>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-[30%] h-min">
            <ModalWind onClose={() => setIsModalOpen(false)}>
              <h1 className="flex flex-row justify-center my-5 text-2xl">
                Ваше замовлення
              </h1>

              <p className="flex flex-row  text-linksTextColor text-2xl">
                Повна вартість: <span className="pl-4">{totalPrice()} грн</span>{" "}
              </p>

              <h1 className="flex flex-row justify-center my-5 text-2xl">
                Внесить ваші данні для замовлення
              </h1>
              <form className="flex flex-col w-full items-center">
                <label htmlFor="Ім'я" className="flex flex-col mb-6">
                  Ім'я
                  <input
                    type="text"
                    placeholder="Введить своє ім'я"
                    className={inputStyle}
                  />
                </label>

                <label htmlFor="По батькові" className="flex flex-col mb-6">
                  Ваше ім'я по батькові
                  <input
                    type="text"
                    placeholder="Ваше ім'я по батькові"
                    className={inputStyle}
                  />
                </label>

                <label htmlFor="Телефон" className="flex flex-col mb-6">
                  Телефон
                  <input
                    type="text"
                    placeholder="Введіть номер телефона"
                    className={inputStyle}
                  />
                </label>

                <ul>
                  {Object.keys(prodForCart).map((productId) => {
                    const product = prodForCart[productId];
                    return (
                      <li
                        key={productId}
                        className="flex flex-row w-full h-120 my-3 items-center"
                      >
                        <div className="flex flex-row w-full items-center">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-16 h-16 border-0 rounded-md mr-2"
                          />
                          <p className="text-2xl px-10">
                            {product.name} - {product.price} грн x{" "}
                            {product.quantity} {""} {product.units}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <div className="mx-4">
                            <СountIncrease productId={productId} />
                          </div>
                          <div>
                            <СountDecrease productId={productId} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </form>

              <button
                type="submit"
                className=" flex px-8 py-3 border-0 rounded-md bg-btmBg mx-auto"
              >
                Замовити
              </button>
            </ModalWind>
          </div>
        </div>
      )}

      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;

// className={`flex desk:w-16 desk:h-16 rounded-full ${prodForCart.length > 0 ? 'border-2 border-red-400' : 'border-0'}`}
