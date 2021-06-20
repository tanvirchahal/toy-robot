import React from "react";
import styles from "./Leaderboard.module.css";

function Leaderboard() {
  const userScores = localStorage.getItem("user_score");
  let scores = [];
  if (userScores) {
    scores = JSON.parse(userScores);
  }

  scores.sort(function (a, b) {
    return b.score - a.score;
  });

  if (scores.length >= 1) {
    return (
      <div className={styles.leaderboard}>
        <h2>Leaderboard</h2>

        <ol>
          {scores.slice(0, 5).map((score, idx) => (
            <li key={idx}>
              <span>{score.user}</span> <br />
              Score: {score.score}
            </li>
          ))}
        </ol>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Leaderboard;
