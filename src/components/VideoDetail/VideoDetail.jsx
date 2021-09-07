import React, { useContext } from "react";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import style from "./VideoDetail.module.scss";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState } = useContext(Store);
  

  return globalState.selected && globalState.selected.id ? (
    <div className={style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <h2> {globalState.selected.snippet.channelTitle} </h2>
      <Linkify>
        <pre> {globalState.selected.snippet.title} </pre>
        <hr />
        <pre> {globalState.selected.snippet.description} </pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
