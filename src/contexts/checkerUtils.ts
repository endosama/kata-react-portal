import { PawnProps } from "../types/Pawn"

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

export { isSameColor, isOnBoard, calculateChessboardMap }
