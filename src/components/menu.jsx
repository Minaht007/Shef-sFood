"use client"
import { useState } from "react";
import Image from "next/image"
import menuList from "../../json/headerMenuList.json";
import subMenu from "../../json/subMenu.json"

const Menu = () => {

    const [isHover, setIsHover] = useState(false)
    const [selected, setSelected] = useState([])

    const handleMenuHover = () => {
        setIsHover(true); 
      };
    
      const handleMenuLeave = () => {
        setIsHover(false); 
      };

    // const closeSubList = () => {
    //     setIsHover(!isHover);        
    // };

    const filters = (type) => {
        const filteredItems = subMenu.filter((item) => item.type === type);
        setSelected(filteredItems);
    };   

    return (
        <div className="  layout" onMouseLeave={handleMenuLeave}>
      <ul className="flex justify-center mx-auto bg-headerMenuBgColor">
        {menuList.map((item) => (
          <li
            key={item.id}
            className="md:px-2 desk:px-4 deskXL:px-6 desk2XL:px-8 py-4 md:text-[14px] desk:text-[18px] deskXL:text-[20px] desk2XL:text-3xl text-linksTextColor hover:text-blue-400 cursor-pointer"
            onMouseEnter={() => {
              handleMenuHover();
              filters(item.type); 
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {isHover && (
        <ul className="flex flex-row justify-start desk:py-6 ">
          {selected.map((type) => (
            <li key={type.id} className=" px-4 py-2 mx-4  rounded-md justify-center ">
              <div className="flex flex-col w-full h-full items-center">
                <div className=" pt-2 ">
                  <Image 
                  src={type.img} 
                  alt="prodIcon"
                  width={60} 
                  height={60}                   
                  className="object-cover border-0 rounded-md mx-auto w-[60px] h-[60px] my-auto deskXL:w-[80px]  deskXL:h-[80px] desk2XL:w-[100px]  desk2XL:h-[100px] hover:scale-125 "
                  />
                </div>
                <p className="mt-3">{type.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    );
};

export default Menu;

// test