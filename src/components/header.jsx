import Image from "next/image"
import Logo from "../../public/img/basketWithFoodLogo.jpg"
import Menu from "./menu"

const Header = () => {

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

        <div>
        <Menu/>
        </div>
       
       
    </div>
   )

}

export default Header