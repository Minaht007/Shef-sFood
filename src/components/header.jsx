"use client"
import Image from "next/image"
import Logo from "../../public/img/basketWithFoodLogo.jpg"
import Menu from "./menu"
import { useState } from "react"
import Cart from "../components/cart"
import { useAppContext } from "../context/context"



const Header = () => {

    const {prodForCard}=useAppContext

    const [isModalOpen, setIsModalOpen] = useState(false)

    // const openModal = ()=> {
    //     setIsModalOpen(true)
    // }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

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

                <div className="pr-6">
                    <svg className="flex desk:w-16 desk:h-16 border-0 rounded-full">
                        <use xlinkHref="/img/sprite/symbol-defs.svg#icon-basket-cart" />
                    </svg>
                </div>              
            </div>

            {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <Cart /> 
            <button className="absolute top-2 right-2" onClick={toggleModal}>
              <svg className="flex w-5 h-5">
                <use xlinkHref="/img/sprite/symbol-defs.svg#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      )}

            <div>
                <Menu />
            </div>


        </div>
    )

}

export default Header