import { useState } from "react"
import { pawns } from "../data/pawns"
import constate from "constate"
import { PawnProps } from "../types/Pawn"
import { MovementType } from "../types/MovementType"
import { PawnMovement } from "../types/PawnMovement"
import { calculateChessboardMap, isOnBoard, isSameColor } from "./checkerUtils"

const useCheckerHook = () => {
  const [actualPawns, setActualPawns] = useState(pawns)
  const [currentTurn, increaseTurn] = useState(0)
  const [chessboardMap, setChessboardMap] = useState(
    calculateChessboardMap(actualPawns)
  )

  const movePawn = (pawn: PawnProps, movement?: PawnMovement) => {
    if (!movement) {
      return
    }
    const clonePawns = [...actualPawns]
    const actualPawn = clonePawns.find((p) => p.index === pawn.index)
    if (actualPawn) {
      actualPawn.x = movement.destination.x
      actualPawn.y = movement.destination.y
      if (
        (actualPawn.color === "black" && actualPawn.x === 7) ||
        (actualPawn.color === "white" && actualPawn.x === 0)
      ) {
        actualPawn.isDouble = true
      }
      if (movement.eaten) {
        const eatenPawn = clonePawns.find((p) => p.index === movement.eaten)
        if (eatenPawn) {
          eatenPawn.isAlive = false
        }
      }
      setActualPawns(clonePawns)
      setChessboardMap(calculateChessboardMap(clonePawns))
      increaseTurn(currentTurn + 1)
    }
  }

  const getValidMovements = (
    pawn: PawnProps
  ): Partial<{ [key in MovementType]: PawnMovement }> => {
    if (
      (currentTurn % 2 === 1 && pawn.color === "white") ||
      (currentTurn % 2 === 0 && pawn.color === "black")
    ) {
      return {} //other team turn
    }

    const validDirections = []
    ;(pawn.isDouble || pawn.color === "black") &&
      validDirections.push(
        { type: MovementType.RB, direction: [1, 1] },
        { type: MovementType.LB, direction: [1, -1] }
      )
    ;(pawn.isDouble || pawn.color === "white") &&
      validDirections.push(
        { type: MovementType.RT, direction: [-1, 1] },
        { type: MovementType.LT, direction: [-1, -1] }
      )
    const initialObject: Partial<{ [key in MovementType]: PawnMovement }> = {}
    return validDirections.reduce((acc, item) => {
      const { type, direction } = item
      const [dx, dy] = direction
      if (isOnBoard(pawn.x + dx, pawn.y + dy)) {
        if (chessboardMap[pawn.x + dx][pawn.y + dy] === -1) {
          acc[type] = {
            destination: { x: pawn.x + dx, y: pawn.y + dy },
            eaten: -1,
          }
        } else {
          if (isOnBoard(pawn.x + dx * 2, pawn.y + dy * 2)) {
            if (!isSameColor(pawn, chessboardMap[pawn.x + dx][pawn.y + dy])) {
              if (chessboardMap[pawn.x + dx * 2][pawn.y + dy * 2] === -1) {
                acc[type] = {
                  destination: { x: pawn.x + dx * 2, y: pawn.y + dy * 2 },
                  eaten: chessboardMap[pawn.x + dx][pawn.y + dy],
                }
              }
            }
          }
        }
      }
      return acc
    }, initialObject)
  }

  return {
    pawns: actualPawns,
    movePawn,
    getValidMovements,
    currentTurn,
  }
}
const [CheckerContextProvider, useCheckerContext] = constate(useCheckerHook)
export { CheckerContextProvider, useCheckerContext }
