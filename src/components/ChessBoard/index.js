import React, { useState } from "react";

import Cell from "./cell";

const ChessBoard = () => {

  const [selectedRowCol, setSelectedRowCol] = useState({})
  const [possibleMoves, setPossibleMoves] = useState([])

  const onCellGotClicked = (row, col) => {
    setSelectedRowCol({ row, col })

    if (row < 0 || col < 0) {
      setPossibleMoves([])
      return
    }

    const moves = []

    // upside
    if (row - 2 >= 0 && col - 1 >= 0) {
      moves.push({ row: row - 2, col: col - 1 })
    }
    if (row - 2 >= 0 && col + 1 <= 7) {
      moves.push({ row: row - 2, col: col + 1 })
    }

    // downside
    if (row + 2 <= 7 && col - 1 >= 0) {
      moves.push({ row: row + 2, col: col - 1 })
    }
    if (row + 2 <= 7 && col + 1 <= 7) {
      moves.push({ row: row + 2, col: col + 1 })
    }

    // leftside
    if (col - 2 >= 0 && row - 1 >= 0) {
      moves.push({ row: row - 1, col: col - 2 })
    }
    if (col - 2 >= 0 && row + 1 <= 7) {
      moves.push({ row: row + 1, col: col - 2 })
    }

    // rightside
    if (col + 2 <= 7 && row - 1 >= 0) {
      moves.push({ row: row - 1, col: col + 2 })
    }
    if (col + 2 <= 7 && row + 1 <= 7) {
      moves.push({ row: row + 1, col: col + 2 })
    }

    setPossibleMoves(moves)
  }

  return (

    <div className="flex-center chess-board-container" >
      <table class="chess-board">
        <tbody>
          <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
            <th>e</th>
            <th>f</th>
            <th>g</th>
            <th>h</th>
          </tr>
          {
            [...Array(8).keys()].map(row => (
              <tr key={`${row}row`}>
                <th>{8 - row}</th>
                {
                  [...Array(8).keys()].map(col => (
                    <Cell possibleMoves={possibleMoves} selectedRowCol={selectedRowCol} row={row} col={col} onCellGotClicked={onCellGotClicked} />
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ChessBoard;
