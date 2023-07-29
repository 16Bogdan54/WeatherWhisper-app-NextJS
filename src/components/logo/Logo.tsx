import React, { useState } from "react";
import Link from "next/link";
import { WiDayCloudy } from "react-icons/wi";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={style.logo} href="/">
      <span>
        <WiDayCloudy className={style.icon} />
      </span>
      <h1>WeatherWhisper</h1>
    </Link>
  );
};

export default Logo;
