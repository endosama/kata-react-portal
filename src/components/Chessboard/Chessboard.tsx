import React from "react"
import "./Chessboard.css"

const Chessboard: React.FC = () => {
  return (
    <div className="chessboard-grid">
      {Array(8)
        .fill(0)
        .map((_, x) => {
          return Array(8)
            .fill(0)
            .map((_, y) => {
              const isBlackSquare = y % 2 === 0 ? x % 2 === 0 : x % 2 === 1
              return (
                <div
                  key={`${x}-${y}`}
                  id={`chessboard-cell-${x}-${y}`}
                  className={`chessboard-cell ${
                    isBlackSquare
                      ? "chessboard-cell-black"
                      : "chessboard-cell-white"
                  }`}
                ></div>
              )
            })
        })}
    </div>
  )
}

export { Chessboard }
