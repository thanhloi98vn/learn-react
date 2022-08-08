// import React from "react";
// import PropTypes from "prop-types";
import React, { useState } from "react";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("white");
  return (
    <div>
      {color}

      <button onClick={() => setColor("black")}>change to black</button>
      <button onClick={() => setColor("white")}>change to white</button>
    </div>
  );
}

export default ColorBox();
