import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import SideList from "../components/SideList/SideList";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import { Store } from "../store";
import { useLocation } from "react-router";
import { fetchSelectedData, fetchRelatedData } from "../apis";

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    if (id) {
      const result = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)]);
      console.log(result);
    }
  };

  useEffect(() => {
    setVideos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, location.search)

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};

export default Watch;
