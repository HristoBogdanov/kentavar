"use client";

import "@/components/navbar/navbar.css";
import { useState } from "react";
import NavbarItem from "../navbarItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openClass, setOpenClass] = useState("");

  const handleClick = () => {
    setOpenClass(openClass === "open" ? "" : "open");
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenClass("");
  };

  return (
    <>
      <div className="bg-softBlack w-fit fixed top-0 right-0 z-20 p-3 lg:p-5">
        <div id="nav-icon2" className={openClass} onClick={() => handleClick()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`w-full overflow-hidden h-screen transition-all ease-in-out duration-500 fixed top-0 left-0 right-0 bottom-0 bg-softBlack flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
        }`}
      >
        <ul className="flex flex-col container lg:ml-40 gap-6 lg:gap-8 w-full p-6 text-white uppercase text-[13vw] md:text-[3.5vw] font-black">
          <NavbarItem path="/" text="начало" onClickFunction={closeMenu} />
          <NavbarItem
            path="about-us"
            text="за нас"
            onClickFunction={closeMenu}
          />
          {/* <NavbarItem path="news" text="новини" onClickFunction={closeMenu} /> */}
          <NavbarItem
            path="contacts"
            text="контакти"
            onClickFunction={closeMenu}
          />
        </ul>
      </div>
    </>
  );
}
