import { useState } from "react"
import { pawns } from "../data/pawns"
import constate from "constate"
import { PawnProps } from "../types/Pawn"
import { MovementType } from "../types/MovementType"
import { PawnMovement } from "../types/PawnMovement"

const emptyRow = Array(8).fill(-1)
const getEmptyMatrix = () => [
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
  [...emptyRow],
]

const calculateChessboardMap = (pawns: PawnProps[]) => {
  const map: number[][] = getEmptyMatrix()
  pawns.forEach((pawn) => {
    if (pawn.isAlive) map[pawn.x][pawn.y] = pawn.index
  })
  return map
}

const isOnBoard = (x: number, y: number): boolean => {
  return x >= 0 && x < 8 && y >= 0 && y < 8
}

const isSameColor = (pawn: PawnProps, pawnIndex: number) => {
  return (
    (pawnIndex < 12 && pawn.color === "black") ||
    (pawnIndex >= 12 && pawn.color === "white")
  )
}

const useCheckerHook = () => {
  const [actualPawns, setActualPawns] = useState(pawns)
  const [chessboardMap, setChessboardMap] = useState(
    calculateChessboardMap(actualPawns)
  )
  return {
    pawns: actualPawns,
    movePawn: (pawn: PawnProps, movement?: PawnMovement) => {
      if (!movement) {
        return
      }
      const clonePawns = [...actualPawns]
      const actualPawn = clonePawns.find((p) => p.index === pawn.index)
      if (actualPawn) {
        actualPawn.x = movement.destination.x
        actualPawn.y = movement.destination.y
        if (movement.eaten) {
          const eatenPawn = clonePawns.find((p) => p.index === movement.eaten)
          if (eatenPawn) {
            eatenPawn.isAlive = false
          }
        }
        setActualPawns(clonePawns)
        setChessboardMap(calculateChessboardMap(clonePawns))
      }
    },
    getValidMovements: (
      pawn: PawnProps
    ): Partial<{ [key in MovementType]: PawnMovement }> => {
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
    },
  }
}
const [CheckerContextProvider, useCheckerContext] = constate(useCheckerHook)
export { CheckerContextProvider, useCheckerContext }
