"use client";

import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "@/components/logo/Logo";

import style from "./Navbar.module.css";

const Navigation = () => {
  return (
    <Navbar fluid rounded className={style.navbar}>
      <Logo />
    </Navbar>
  );
};

export default Navigation;
