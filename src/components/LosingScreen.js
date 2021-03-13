import React from "react"

export const LosingScreen = ({setIsLost, resetGame}) => {
  const handleClick = () => {
    setIsLost(false);
    resetGame();
  }
  return(
    <section
      className="losing-screen"
      onClick={handleClick}>
      <h1>You Lost!</h1>
      <h2>Click if you want to play again</h2>
    </section>
    )
}
