import React, { useState } from "react"
import "./Pawn.css"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PawnProps } from "../../types/Pawn"
import ReactDOM from "react-dom"

type Position = {
  x: number
  y: number
}

interface PawnControlsProps {
  position: Position
  setPosition: (p: Position) => void
}

const PawnControls: React.FC<PawnControlsProps> = ({
  position,
  setPosition,
}) => {
  const setPositionWithLimits = ({ x, y }: Position) => {
    let actualX = x
    let actualY = y
    if (x > 7) actualX = 7
    if (x < 0) actualX = 0
    if (y > 7) actualY = 7
    if (y < 0) actualY = 0
    console.log(`Moving ${position.x},${position.y} to ${actualX},${actualY}`)
    setPosition({ x: actualX, y: actualY })
  }
  return (
    <div className="pawn-move-container">
      <div
        onClick={() =>
          setPositionWithLimits({ x: position.x - 1, y: position.y - 1 })
        }
        className="pawn-move pawn-move-lt"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div
        onClick={() =>
          setPositionWithLimits({ x: position.x + 1, y: position.y - 1 })
        }
        className="pawn-move pawn-move-lb"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div
        onClick={() =>
          setPositionWithLimits({ x: position.x + 1, y: position.y + 1 })
        }
        className="pawn-move pawn-move-rb"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div
        onClick={() =>
          setPositionWithLimits({ x: position.x - 1, y: position.y + 1 })
        }
        className="pawn-move pawn-move-rt"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  )
}

const Pawn: React.FC<Partial<PawnProps>> = (props = {}) => {
  const [position, setPosition] = useState({ x: props.x, y: props.y })
  const cell = document.getElementById(
    `chessboard-cell-${position.x}-${position.y}`
  )
  return (
    <>
      {position.x !== undefined && position.y !== undefined && cell ? (
        ReactDOM.createPortal(
          <div
            className={`pawn ${props.color === "black" ? "pawn-black" : ""}`}
          >
            <PawnControls
              position={{
                x: position.x || 0,
                y: position.y || 0,
              }}
              setPosition={setPosition}
            />
          </div>,
          cell
        )
      ) : (
        <div className="pawn" />
      )}
    </>
  )
}

export { Pawn }
