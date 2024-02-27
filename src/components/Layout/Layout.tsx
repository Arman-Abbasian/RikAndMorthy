import { Outlet, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Layout() {
  return (
    <div className="flex gap-8 p-4">
      <Navbar />
      <div className="flex-1 ml-[55px] flex justify-center w-full ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

import { HiOutlineFilm } from "react-icons/hi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import React, { useState } from "react";

const listinProrityShowVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: "0vw",
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};
const listItem = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: "0vw",
    transition: { duration: 1 },
  },
};

function Navbar() {
  return (
    <aside className="w-16 flex justify-center fixed left-0 top-4 h-screen bg-color-dark-primary overflow-y-auto rounded-tl-md rounded-bl-md">
      <motion.ul
        className="flex flex-col gap-6 justify w-full"
        variants={listinProrityShowVariant}
        initial="initial"
        animate="animate"
      >
        <SidebarItem text="episodes" to="episodes">
          <HiOutlineFilm />
        </SidebarItem>
        <SidebarItem text="characters" to="characters">
          <BsPerson />
        </SidebarItem>
        <SidebarItem text="info" to="about_me">
          <IoIosInformationCircleOutline />
        </SidebarItem>
      </motion.ul>
    </aside>
  );
}

interface IProps {
  children: React.ReactNode;
  to: string;
  text: string;
}
const showLogoOrText = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: { duration: 0.01 },
  },
};

function SidebarItem({ children, to, text }: IProps) {
  const [showText, setShowText] = useState(false);
  return (
    <AnimatePresence>
      <motion.li
        className="flex justify-center"
        onMouseOver={() => setShowText(true)}
        onMouseOut={() => setShowText(false)}
        variants={listItem}
      >
        <NavLink
          key={+showText}
          className="hover:bg-color-secondary transition-all duration-500 cursor-pointer w-full flex justify-center p-4"
          to={to}
        >
          <motion.div
            variants={showLogoOrText}
            initial="initial"
            animate="animate"
            className={`${showText ? "hidden" : "block"}`}
          >
            {children}
          </motion.div>
          <motion.p
            variants={showLogoOrText}
            initial="initial"
            animate="animate"
            className={`${
              showText ? "block" : "hidden"
            } text-xs transition-all duration-500`}
          >
            {text}
          </motion.p>
        </NavLink>
      </motion.li>
    </AnimatePresence>
  );
}
