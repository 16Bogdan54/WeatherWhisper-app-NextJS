import React, { useState } from "react";
import Link from "next/link";
import style from "./Logo.module.css";

const Logo = () => {
  const [isHover, setHover] = useState<boolean>(false);

  const getTextClass = (isHover: boolean) => {
    return isHover ? "" : style.text_hidden;
  };

  return (
    <Link href="/">
      <h1
        className={style.logo}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        W
        <span className={`${style.dynamic_text} ${getTextClass(isHover)}`}>
          eather
        </span>
        W
        <span className={`${style.dynamic_text} ${getTextClass(isHover)}`}>
          hisper
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
