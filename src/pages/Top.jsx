<<<<<<< HEAD
import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis/index";
import { Store } from "../store/index";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  console.log(globalState);

  useEffect(() => {
    fetchPopularData().then( (res) => {
      console.log("data", res);
       setGlobalState({ type: "SET_POPULAR", payload: { popular: res.data.items } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <VideoGrid>

        {globalState.popular &&
          globalState.popular.map((popular) => {
            console.log(popular.snippet.thumbnails);
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.high.url}
                title={popular.snippet.title}
              />
            );
          })}
      </VideoGrid>
    </Layout>
  );
};
=======
import React from 'react'

const Top = () => {
  return (
    <div>
      
    </div>
  )
}
>>>>>>> df36e25df4913dc12faff75150928b1d470a9960

export default Top;
