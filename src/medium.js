import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Medium() {
  const getRandomColor = () => {
    return Math.random() < 0.5 ? 'red' : 'green';
  };

  const [color, setColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(40); // Initialize timer to 40 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
      setTimer((prevTimer) => prevTimer - 1); // Decrement the timer
    }, getRandomInterval());

    return () => {
      clearInterval(interval);
    };
  }, [gameOver]);

  useEffect(() => {
    if (timer === 0) {
      // If the timer reaches 0, set the game over state to true
      setGameOver(true);
    }
  }, [timer]);

  const getRandomInterval = () => {
    // Return a random value between 0ms and 2000ms (0 to 2 seconds)
    return Math.floor(Math.random() * 2000);
  };

  const handleRestart = () => {
    setColor(getRandomColor());
    setScore(0);
    setGameOver(false);
    setTimer(40); // Reset the timer to 40 seconds
  };

  const handleClick = () => {
    if (gameOver) {
      return; // If the game is already over, do nothing
    }

    if (color === 'green') {
      setScore(score + 1);

      if (score + 1 === 15) {
        // If the user scores 10, set the game over state to true
        setGameOver(true);
      }
    } else {
      setGameOver(true); // Set game over state to true
    }
  };

  return (
    <div className="color-box-container">
      <div style={{ fontStyle: 'bold', fontSize: '30px' }}>Color change Game</div><br />
      <div
        className={`color-box ${color}`}
        onClick={handleClick}
      >
        {color === 'green' ? '' : ''}
      </div>
      <div className="score-message">
        {gameOver ? (
          <div>
            <div>{score === 10 ? 'Winner!' : 'Game Over!'}</div>
            <div>Score: {score}</div>
            <button onClick={handleRestart} className="submit-button">Restart</button>
            <Link to="/"><button style={{ fontSize: '20px', fontStyle: 'bold', color: 'purple' }}>Home</button></Link>

          </div>
        ) : (
          <div>
            Score: {score}
            <br />
            Time Left: {timer} seconds
          </div>
        )}
      </div>

    </div>
  );
}

export default Medium;
