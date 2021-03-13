import React from 'react';
import uniqid from 'uniqid';

export const Board = ({tiles, checkForClicked}) => {
  const appendTiles = () => {
    return tiles.map(tile => 
            <div 
              className="tile"
              key={uniqid()}
              id={tile}
              onClick={checkForClicked}>
              <div className="name">{tile}</div>
            </div>)
  }

  return (
    <div className="board">
      {appendTiles()}
    </div>
  )
}
