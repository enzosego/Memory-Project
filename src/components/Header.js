import React from 'react';

export const Header = ({score, bestScore}) => {
  return (
    <header>
      <h1>The Last Memory Game</h1>
      <section className="score-container">
        <h3>Current Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </section>
    </header>
  )
}
