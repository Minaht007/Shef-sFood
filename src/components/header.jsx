"use client";
import Image from "next/image";
// import Logo from "../../public/img/";
import BurgerMenuIcons from "../../public/img/other/burger.png"
import Menu from "./menu";
import { useState } from "react";
import { useAppContext } from "../context/context";
import ModalWind from "./modalWind";
import useSaveLocalCart from "../hooks/saveCart";

import CountIncrease from "./btm/btmIncrease";
import CountDecrease from "./btm/btmDecrease";

import SendToTelegram from "./sentToTelegram";

import Burger from "./burgerMenu"


const headerLinkStyle = "sm:text-[12px] desk:text-xl sm:px-2 md:px-3"
const inputStyle =
  "desk:w-[400px] sm:py-2 py-3 pl-2 mt-1 border-[1px] border-linksTextColor hover:border-inputHoverColor focus:border-red-400";

const Header = () => {
  
  const { prodForCart, totalPrice } = useAppContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formatProducts = (products) => {
    return Object.values(products).map((product) => ({
      name: `${product.name} - ${product.price} грн x ${product.quantity} ${product.units}`,
      id: product.id,
    }));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleClickBurger = () => {
    setBurgerMenuIsOpen(!burgerMenuIsOpen);
  };

  useSaveLocalCart("myCart", prodForCart);

  const basketIsActive = () => {
    return prodForCart.length === 0
      ? "flex sm:w-10 sm:h-10 md:w-12 md:h-12 desk:w-16 desk:h-16 border-0 rounded-full py-1 px-1"
      : "flex sm:w-10 sm:h-10 md:w-12 md:h-12 desk:w-16 desk:h-16 border-4 border-[#ef4444] rounded-full";
  };

  const handleSuccess = () => {
    alert("Ваше замовлення прийнято")
    setSuccessMessage("Ваше замовлення прийнято")
    setIsModalOpen(false); 
  };



  const Data = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

   const formatPhoneNumber = (value) => {
    
    const cleaned = value.replace(/\D/g, '');
    
    
    const limited = cleaned.slice(0, 18);

   
    let formatted = '';
    
    // Код страны
    if (limited.length > 0) {
      formatted = `+${limited.slice(0, 2)}`; 
    }
    
    // Код оператора
    if (limited.length > 2) {
      formatted += ` (${limited.slice(2, 5)}`; 
    }
    if (limited.length > 5) {
      formatted += `) ${limited.slice(5, 8)}`; 
    }
    if (limited.length > 8) {
      formatted += `-${limited.slice(8, 10)}`; 
    }
    if (limited.length > 10) {
      formatted += `-${limited.slice(10, 15)}`; 
    }
    
    return formatted;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(formatPhoneNumber(value));
  };

  return (
    <div className="flex flex-col mx-auto  sticky top-0 left-0  bg-mainColor layout z-10">
      <div className="flex flex-row items-center w-screen justify-between layout">
        <div className="flex py-3 relative md:mx-4 desk:mx-16">
        <div onClick={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)} className="sm:ml-4 md:hidden desk:hidden sm:mr-24" >
          <Image src={BurgerMenuIcons} alt="burger" width={40} height={40} />
          <Burger isOpen={burgerMenuIsOpen} onClick={toggleClickBurger} />
        </div>

        {/* <svg className="w-100 h-40">
          <use xlinkHref="/icons/symbol-defs.svg#icon-logoTextSVG" className="w-100 fill-green" />
        </svg>
         */}
          {/* <Image
            src={Logo}
            alt="logo"
            width={40}
            height={60}
            className="border-0 rounded-md w-full h-80px desk:w-full desk:h-[60px] deskXL:w-[100px] deskXL:h-[100px]   "
          />           */}
        </div>   

           

        <div className="flex flex-row sm:hidden md:flex desk:flex justify-center">
          <p className={headerLinkStyle}>Про нас</p>
          <p className={headerLinkStyle}>Доставки</p>
          <p className={headerLinkStyle}>Розрахунок</p>
          <p className={headerLinkStyle}>Правила</p>
        </div>

        <div className="pr-6" onClick={toggleModal}>
          <svg className={basketIsActive()}>
            <use xlinkHref="/img/sprite/symbol-defs.svg#icon-basket-cart" />
          </svg>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" >
          <div className="bg-white p-4 rounded-lg sm:w-[90%] w-[30%] h-min">
            <ModalWind onClose={() => setIsModalOpen(false)}>
              <h1 className="flex flex-row justify-center my-5 sm:text-xl text-2xl">
                Ваше замовлення
              </h1>

              <div className="text-2xl text-mainTextColor ">{Data()}</div>

              <p className="flex flex-row  text-linksTextColor text-2xl">
                Повна вартість: <span className="pl-4">{totalPrice()} грн</span>{" "}
              </p>

              <h1 className="flex flex-row justify-center my-5 text-2xl">
                Внесить ваші данні для замовлення
              </h1>

              <form
                className="flex flex-col w-full items-center"
                // onSubmit={handleSubmitHeader}
              >
                <label htmlFor="Ім'я" className="flex flex-col sm:mb-3 mb-6">
                  Ім&apos;я
                  <input
                    type="text"
                    placeholder="Введить своє ім'я"
                    required
                    className={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label htmlFor="По батькові" className="flex flex-col sm:mb-3 mb-6">
                  Ваше ім&apos;я по батькові
                  <input
                    type="text"
                    placeholder="Фамілія"
                    required
                    className={inputStyle}
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </label>

                <label htmlFor="Телефон" className="flex flex-col sm:mb-3 mb-6">
                  Телефон
                  <input
                    type="phone"
                    placeholder="Введіть номер телефона"
                    required
                    className={inputStyle}
                    value={phone}
                    onChange={handleChange}
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
                          <Image
                            src={product.img}
                            alt={product.name}
                            width={60}
                            height={60}
                            className="w-16 h-16 border-0 rounded-md mr-2"
                          />
                          <p className=" sm:text-lg text-2xl sm:px-2 px-10">
                            {product.name} - {product.price} грн x{" "}
                            {product.quantity} {""} {product.units}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <div className="mx-4">
                            <CountIncrease productId={productId} />
                          </div>
                          <div>
                            <CountDecrease productId={productId} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <SendToTelegram                  
                    totalPrice={totalPrice()}
                    name={name}
                    surname={surname}
                    phone={phone}
                    prodName={formatProducts(prodForCart)}    
                    onSuccess={handleSuccess}               
                                      
                  />
                </ul>
              </form>
            </ModalWind>
          </div>
        </div>
      )}

      <div className="hidden md:flex">
        <Menu />
      </div>   
    </div>
  );
};

export default Header;

