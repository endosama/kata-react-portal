import React, { useEffect, useState } from "react"
import { useCheckerContext } from "../../contexts/CheckerContext"
import { pawns } from "../../data/pawns"
import { PawnProps } from "../../types/Pawn"
import { Chessboard } from "../Chessboard/Chessboard"
import { Pawn } from "../Pawn/Pawn"

export const KataCode: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const { pawns } = useCheckerContext()
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
    </>
  )
}
