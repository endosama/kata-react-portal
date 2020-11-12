import React, { useEffect, useState } from "react"
import { useCheckerContext } from "../../contexts/CheckerContext"
import "./KataCode.css"
import { PawnProps } from "../../types/Pawn"
import { Chessboard } from "../Chessboard/Chessboard"
import { Pawn } from "../Pawn/Pawn"

export const KataCode: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const { pawns, currentTurn } = useCheckerContext()
  useEffect(() => {
    setLoaded(true)
  })
  return (
    <>
      <Chessboard />
      {loaded &&
        pawns.map((pawn: PawnProps) => {
          return <Pawn pawn={pawn} />
        })}
      <div className="message-box">
        {currentTurn % 2 === 0 ? (
          <Pawn pawn={{ isAlive: true, color: "white" } as any} />
        ) : (
          <Pawn pawn={{ isAlive: true, color: "black" } as any} />
        )}
        's turn
      </div>
    </>
  )
}
