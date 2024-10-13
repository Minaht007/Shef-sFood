"use client";


import menuLinks from "../../json/headerMenuList.json";
import Link from "next/link";

const BurgerMenu = ({ isOpen, toggleClickBurger }) => {
    return (
      <div onClick={toggleClickBurger}>
        {isOpen && (
          <ul className="absolute top-16 sm:left-[16px] desk:left-[2%] z-40 bg-white border-2 border-blue-500 rounded-lg p-10 py-3">
            {menuLinks.map((item, id) => (
              <li key={id}>
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

export default BurgerMenu;
