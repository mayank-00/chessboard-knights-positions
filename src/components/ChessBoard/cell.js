import React, { useEffect, useState } from "react";

const cellColor = (row, col) => {
  let isLight = (row + 1) % 2 === 1 ? true : false
  isLight = (col + 1) % 2 === 1 ? isLight : !isLight
  return isLight ? "light" : "dark"
}

const Cell = ({ selectedRowCol, possibleMoves, onCellGotClicked, row, col }) => {

  const [colorClass, setColorClass] = useState(cellColor(row, col))
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {

    let colorClass = "";
    let isSelected = false;

    if (selectedRowCol.row === row && selectedRowCol.col === col) {
      colorClass = "glow"
      isSelected = true
    } else if (possibleMoves.find(cell => row === cell.row && col === cell.col)) {
      colorClass = "glow"
    }

    if (!colorClass) {
      colorClass = cellColor(row, col)
    }

    setColorClass(colorClass)
    setIsSelected(isSelected)
  }, [selectedRowCol, possibleMoves, row, col])

  const handleClick = () => {
    if (isSelected) {
      onCellGotClicked(-1, -1)
      return
    }
    onCellGotClicked(row, col)
  }

  return <td className={colorClass} onClick={handleClick}>
    {isSelected ? "♞" : ""}
  </td>
}

export default Cell;