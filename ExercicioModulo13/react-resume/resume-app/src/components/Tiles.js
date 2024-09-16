import React from "react";

function Tiles({ className, value }) {
  return <div className={`tile ${className}`}>{value}</div>;
}

export default Tiles;
