import React, { useState } from "react";
import style from "./Logo.module.css";

const Logo = () => {
  const [isHover, setHover] = useState<boolean>(false);

  const getTextClass = (isHover: boolean) => {
    return isHover ? "WeatherWhisper" : "WW";
  };

  return (
    <>
      <h1
        className={style.logo}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {getTextClass(isHover)}
      </h1>
    </>
  );
};

export default Logo;
