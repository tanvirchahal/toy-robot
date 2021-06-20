import React from "react";
import RobotImg from "../../assets/robot.png";
import styled from "styled-components";

const RobotComponent = styled.div`
  transform: rotate(${(props) => props.rotate}deg);
`;

function Robot({ rotation, robotLocation }) {
  return (
    <div
      style={{
        width: "100",
        marginLeft: "20px",
        marginTop: "25px",
        top: robotLocation[0] * 20 + "%",
        left: robotLocation[1] * 20 + "%",
        position: "absolute",
        transform: [{ skewX: "45deg" }],
      }}
    >
      <RobotComponent rotate={rotation}>
        <img alt="robot" src={RobotImg} width="60" />
      </RobotComponent>
    </div>
  );
}

export default Robot;
