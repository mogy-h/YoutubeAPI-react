import React from 'react'

import style from "./VideoGrid.module.scss"


const VideoGrid = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
}

export default VideoGrid;
