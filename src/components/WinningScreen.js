import React from "react"

export const WinningScreen = ({setIsWon, resetGame}) => {
  const handleClick = () => {
    setIsWon(false);
    resetGame();
  }
  return(
    <section 
      className="winning-screen"
      onClick={handleClick}>
      <h1>You Won!</h1>
      <h2>Click if you want to play again</h2>
    </section>
    )
}
