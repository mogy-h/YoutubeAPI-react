import React from "react";
import Youtube from "react-youtube";
import style from "./VideoPlay.module.scss";

const VideoPlay = ({ id }) => {
  return (
    <div className={style.wrap}>
      <Youtube className={style.video} videoId={id} />
    </div>
  );
};

export default VideoPlay;
