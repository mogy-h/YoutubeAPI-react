import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../../apis";
import { Store } from "../../store";
import VideoPlay from "../VideoPlay/VideoPlay";
import style from "./VideoDetail.module.scss";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();

  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: item },
      });
    });
  };

  useEffect(() => {
    setSelectedVideo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
