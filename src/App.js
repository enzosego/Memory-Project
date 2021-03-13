import React, { useState, useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { WinningScreen } from './components/WinningScreen';
import { LosingScreen } from './components/LosingScreen';

const App = () => {
  const [score, setScore] = useState(() => 0);
  const [tiles, setTiles] = useState(['aang', 'toph', 'zuko', 'momo', 'ozai', 'sokka', 'iroh', 'appa', 'azula', 'katara']);
  const [clickedTiles, setClickedTiles] = useState(() => []);
  const [bestScore, setBestScore] = useState(() => 0);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  
  useEffect(() => {
    if (score == 10) setIsWon(true);
  }, [score])

  const resetGame = () => {
    setBestScore(score);
    setScore(0);
  }

  const earnPoint = () => 
    setScore(prevValue => prevValue + 1);

  const alterTilesOrder = () => {
    let newTilesOrder = [];
    tiles.forEach(tile => {
      const num = Math.random();
      num > 0.5 
        ? newTilesOrder.push(tile)
        : newTilesOrder.unshift(tile);
    });
    setTiles(newTilesOrder);
  }

  const checkForClicked = e => {
    if (clickedTiles.indexOf(e.target.id) !== -1) {
      setIsLost(true);
      setClickedTiles([]);
      return;
    } 
    earnPoint();
    let newClickedTiles = [...clickedTiles];
    newClickedTiles.push(e.target.id);
    setClickedTiles(newClickedTiles);
    alterTilesOrder();
  }

  return (
    <div className="App">
      <Header 
        score={score}
        bestScore={bestScore}
      />
      <Board 
        tiles={tiles}
        checkForClicked={checkForClicked}
      />
      {isWon && 
      <WinningScreen 
        setIsWon={setIsWon} 
        resetGame={resetGame}/>}
      {isLost &&
      <LosingScreen
        setIsLost={setIsLost}
        resetGame={resetGame}/>}
    </div>
  );
}

export default App;
