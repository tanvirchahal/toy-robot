import React from "react";
import Button from "./Button";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import ArrowUp from "../../assets/arrow-up.png";

function Controls({ rotateLeft, rotateRight, moveAhead }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Button text="Left" image={ArrowLeft} onClick={() => rotateLeft()} />
      <Button text="Move" image={ArrowUp} onClick={() => moveAhead()} />
      <Button text="Right" image={ArrowRight} onClick={() => rotateRight()} />
    </div>
  );
}

export default Controls;
