import React, { useState, useEffect } from "react";
import Grid from "./components/Grid/Grid";
import Robot from "./components/Robot/Robot";
import Target from "./components/Target/Target";
import Timer from "./components/Timer/Timer";
import Score from "./components/Score/Score";
import Controls from "./components/Controls/Controls";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Popup from "./components/Popup/Popup";
import { randomNumber } from "./helpers";
import "./App.css";

function App() {
  const [rotation, setRotation] = useState(0);
  const [robotLocation, setRobotLocation] = useState([2, 2]);
  const [targetLocation, setTargetLocation] = useState([]);
  const [destroyed, setDestroyed] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setgameOver] = useState(false);

  //Generate target location on page load
  useEffect(() => {
    locateTarget();
  }, []);

  useEffect(() => {
    gameTimer();
  }, [timer]);

  //Check score on
  useEffect(() => {
    if (
      robotLocation[0] === targetLocation[0] &&
      robotLocation[1] === targetLocation[1]
    ) {
      let newScore = score + 1;
      setScore(newScore);
      locateTarget();
    }
  }, [robotLocation, targetLocation, rotation]);

  /* Keyboard Functionality */
  useEffect(() => {
    if (!gameOver) {
      //Reference from https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/
      document.addEventListener("keydown", keyboardControls);
      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        document.removeEventListener("keydown", keyboardControls);
      };
    }
  }, [robotLocation, targetLocation, rotation]);

  const gameTimer = () => {
    if (timer > 0 && !destroyed && !gameOver) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      if (timer === 0) {
        endGame();
      }
    }
  };

  const locateTarget = () => {
    let locationX = randomNumber(0, 4);
    let locationY = randomNumber(0, 4);

    //Target Must never be placed on
    if (locationX === robotLocation[0] && locationY === robotLocation[1]) {
      locateTarget();
    }
    setTargetLocation([locationX, locationY]);
  };

  const rotateLeft = () => {
    rotation > 0 ? setRotation(rotation - 90) : setRotation(270);
  };

  const rotateRight = () => {
    rotation < 270 ? setRotation(rotation + 90) : setRotation(0);
  };

  const moveAhead = () => {
    const tempLocation = [...robotLocation];

    //If Rotation is 0, move Up
    if (rotation === 0) {
      tempLocation[0] -= 1;
      // tempLocation[0] > 0 ? (tempLocation[0] -= 1) : (tempLocation[0] = 4);
    }

    //If Rotation is 180, move down
    if (rotation === 180) {
      tempLocation[0] += 1;
      // tempLocation[0] < 4 ? (tempLocation[0] += 1) : (tempLocation[0] = 0);
    }

    //If Rotation is 0, move Up
    if (rotation === 90) {
      tempLocation[1] += 1;
      // tempLocation[1] < 4 ? (tempLocation[1] += 1) : (tempLocation[1] = 0);
    }

    //If Rotation is 0, move Up
    if (rotation === 270) {
      tempLocation[1] -= 1;
      // tempLocation[1] > 0 ? (tempLocation[1] -= 1) : (tempLocation[1] = 4);
    }

    checkDestroyed(tempLocation)
      ? endGame()
      : setRobotLocation([tempLocation[0], tempLocation[1]]);
  };

  const keyboardControls = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        rotateLeft();
        break;
      case "ArrowRight":
        rotateRight();
        break;
      case "ArrowUp":
        moveAhead();
        break;
    }
  };

  const checkDestroyed = (tempLocation) => {
    if (
      tempLocation[0] > 4 ||
      tempLocation[0] < 0 ||
      tempLocation[1] > 4 ||
      tempLocation[1] < 0
    ) {
      setDestroyed(true);
      return true;
    }
    return false;
  };

  const startNewGame = () => {
    setRotation(0);
    setRobotLocation([2, 2]);
    locateTarget();
    setScore(0);
    setgameOver(false);
    setDestroyed(false);
    setTimer(60);
  };

  const endGame = () => {
    setgameOver(true);

    //Get previous users
    const prevScores = localStorage.getItem("user_score");
    const users = prevScores ? JSON.parse(prevScores) : [];

    var userScore = {
      user: "Player 1",
      score: score,
    };

    users.push(userScore);
    localStorage.setItem("user_score", JSON.stringify(users));
  };

  return (
    <div className="App">
      <Leaderboard />
      <div className="wrapper">
        <Score score={score} />
        <Timer timer={timer} />
        <Grid>
          <Target targetLocation={targetLocation} />
          <Robot rotation={rotation} robotLocation={robotLocation} />
        </Grid>
        <Controls
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
          moveAhead={moveAhead}
        />
      </div>
      <Popup
        gameState={gameOver}
        startNewGame={startNewGame}
        heading="Game Over!!!"
        btnText="Start New Game"
      />
    </div>
  );
}

export default App;
