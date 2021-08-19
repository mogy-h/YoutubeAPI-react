import React from "react";
import Header from "../Header/Header";
import style from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.main} >{children}</div>
    </div>
  );
};

export default Layout;
