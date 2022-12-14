import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div>
      <div className="album">
        <div className="album_thumbnailUrl">
          <img src={album.thumbnailUrl} alt={album.name} />
        </div>
        <p className="album_name">{album.name}</p>
        <p className="album_title">{album.title}</p>
      </div>
    </div>
  );
}

export default Album;
