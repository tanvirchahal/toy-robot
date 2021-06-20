import React from "react";
import Star from "../../assets/star.png";

function Target({ targetLocation }) {
  return (
    <div
      style={{
        width: "100",
        marginLeft: "20px",
        marginTop: "25px",
        top: targetLocation[0] * 20 + "%",
        left: targetLocation[1] * 20 + "%",
        position: "absolute",
      }}
    >
      <img alt="target" src={Star} width="60" />
    </div>
  );
}

export default Target;
