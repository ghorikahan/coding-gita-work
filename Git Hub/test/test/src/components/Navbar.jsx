import React from "react";
import "../stylesheet/navbar.css";
import logo from "../assests/logo.svg";
import But from "./Chakra_Drawer";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="navbar">
      <div className="navlogo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="navbtn">
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/frontend">Frontend</Link>
        </li>
        <li>
          <Link to="/backend">Backend</Link>
        </li>
        {/* <li>Solutions</li> */}
        {/* <li>
          <Link to="/bootcamp">Bootcamps</Link>
        </li> */}
        {/* <li>Blogs</li> */}
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div className="chat">
        <But />
      </div>
      <div className="dropdown-nav">
        <Button ref={btnRef} colorScheme="#5d21d1" onClick={onOpen}>
          <FaBars />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xl"
          id="drawer-nav"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <div className="navlogo-drop" onClick={onClose}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="dropdown-menu">
              <li onClick={onClose}>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
              <li onClick={onClose}>
                <Link to="/services">Services</Link>
              </li>
              <li onClick={onClose}>
                <Link to="/frontend">Frontend</Link>
              </li>
              <li onClick={onClose}>
                <Link to="/backend">Backend</Link>
              </li>
              {/* <li onClick={onClose}>Solutions</li> */}
              {/* <li onClick={onClose}>
          <Link to="/bootcamp">Bootcamps</Link>
        </li> */}
              {/* <li onClick={onClose}>Blogs</li> */}
              <li onClick={onClose}>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="chat2">
                <But />
              </li>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
