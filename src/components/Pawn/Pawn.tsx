import React, { useState } from "react"
import "./Pawn.css"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PawnProps } from "../../types/Pawn"
import ReactDOM from "react-dom"
import { useCheckerContext } from "../../contexts/CheckerContext"
import { MovementType } from "../../types/MovementType"
import { Position } from "../../types/Position"

interface PawnControlsProps {
  pawn: PawnProps
}

const PawnControls: React.FC<PawnControlsProps> = ({ pawn }) => {
  const { getValidMovements, movePawn } = useCheckerContext()
  const validMovements = getValidMovements(pawn)
  return (
    <div className="pawn-move-container">
      {validMovements[MovementType.LT] && (
        <div
          onClick={() => movePawn(pawn, validMovements[MovementType.LT])}
          className="pawn-move pawn-move-lt"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
      {validMovements[MovementType.LB] && (
        <div
          onClick={() => movePawn(pawn, validMovements[MovementType.LB])}
          className="pawn-move pawn-move-lb"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
      {validMovements[MovementType.RB] && (
        <div
          onClick={() => movePawn(pawn, validMovements[MovementType.RB])}
          className="pawn-move pawn-move-rb"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
      {validMovements[MovementType.RT] && (
        <div
          onClick={() => movePawn(pawn, validMovements[MovementType.RT])}
          className="pawn-move pawn-move-rt"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      )}
    </div>
  )
}

const Pawn: React.FC<{ pawn: PawnProps }> = ({ pawn }) => {
  const [currentPawn, setCurrentPawn] = useState(pawn)
  const cell = document.getElementById(
    `chessboard-cell-${currentPawn.x}-${currentPawn.y}`
  )
  return (
    <>
      {pawn.isAlive && (
        <>
          {pawn.x !== undefined && pawn.y !== undefined && cell ? (
            ReactDOM.createPortal(
              <div
                className={`pawn ${pawn.color === "black" ? "pawn-black" : ""}`}
              >
                <PawnControls pawn={currentPawn} />
              </div>,
              cell
            )
          ) : (
            <div className="pawn" />
          )}
        </>
      )}
    </>
  )
}

export { Pawn }
