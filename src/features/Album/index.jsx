import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Remix Việt Mới Nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/8/c/5/38c59549cebcd47edfbbe50dd6d6bf04.jpg",
    },
    {
      id: 2,
      name: "Nhạc Trẻ Vinahouse",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/e/5/d/fe5dfebabeb63934a45bb8240db7e1ea.jpg",
    },
    {
      id: 3,
      name: "Top Hits Remix",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/5/7/6/d5762221d5031c280bd1b127dcd2463d.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
