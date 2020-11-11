import React, { useEffect, useState } from "react"
import { pawns } from "../../data/pawns"
import { PawnProps } from "../../types/Pawn"
import { Chessboard } from "../Chessboard/Chessboard"
import { Pawn } from "../Pawn/Pawn"

export const KataCode: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  })
  return (
    <>
      <Chessboard />
      {loaded &&
        pawns.map((pawn: PawnProps) => {
          return <Pawn {...pawn} />
        })}
    </>
  )
}
