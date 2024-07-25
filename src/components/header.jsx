"use client"
import Image from "next/image"
import Logo from "../../public/img/basketWithFoodLogo.jpg"
import Menu from "./menu"
import { useState } from "react"
import Cart from "../components/cart"
import { useAppContext } from "../context/context"

import ModalWind from "./modalWind"



const Header = () => {

    const { prodForCart } = useAppContext()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const onClickOutside = (e) => {
        setIsModalOpen(false);
    }

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

                <div className="pr-6" onClick={toggleModal} >
                    <svg className="flex desk:w-16 desk:h-16 border-0 rounded-full">
                        <use xlinkHref="/img/sprite/symbol-defs.svg#icon-basket-cart" />
                    </svg>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={onClickOutside}>
                    <div className="bg-white p-4 rounded-lg w-[300px] h-[400px]" >
                        <ModalWind onClose={() => setIsModalOpen(false)}>
                            <ul>
                                {Object.keys(prodForCart).map((productId) => (
                                    <li key={productId} className="flex flex-col w-100 h-120">
                                        {prodForCart[productId].name} - {prodForCart[productId].price} грн x {prodForCart[productId].quantity}
                                    </li>
                                ))}
                            </ul>
                        </ModalWind>
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