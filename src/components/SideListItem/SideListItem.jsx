import React from "react";
import { Link } from "react-router-dom";
import style from "./SideListItem.module.scss"

const SideListItem = ({ id, src, title }) => {
  return (
    <Link className={style.item} to={{ pathname: "watch", search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div className={style.info} >
        <span> {title} </span>
      </div>
    </Link>
  );
};

export default SideListItem;
