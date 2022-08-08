import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Cho Chủ Nhật",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/f/3/39f3e424418cc15d3703e2810ee43b8c.jpg",
      title: "Chủ nhật thư giản với giai điệu Lofi",
    },
    {
      id: 2,
      name: "V-Pop Debut Song",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/f/6/8/7f68474f9e8b27d49b99ae119c7b0ca1.jpg",
      title: "Nhũng bản hit mới",
    },
    {
      id: 3,
      name: "Cà phê cùng nhạc phim",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/5/c/845c3e909e0fbfe6ee3b20d13ffd73fa.jpg",
      title: "Hồi tưởng những thước phim",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn thích </h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
