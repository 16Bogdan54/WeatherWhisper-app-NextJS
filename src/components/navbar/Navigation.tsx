"use client";
import React from "react";
import { Dropdown, Navbar } from "flowbite-react";
import Logo from "@/components/logo/Logo";

const Navigation = () => {
  return (
    <Navbar fluid rounded>
      <Logo />
    </Navbar>
  );
};

export default Navigation;
