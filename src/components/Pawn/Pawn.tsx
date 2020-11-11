import React from "react"
import "./Pawn.css"
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
  return (
    <div
      className="pawn-move-container"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        onClick={() => setPosition({ x: position.x - 1, y: position.y })}
        className="pawn-move pawn-move-up"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div
        onClick={() => setPosition({ x: position.x + 1, y: position.y })}
        className="pawn-move pawn-move-down"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div
        onClick={() => setPosition({ x: position.x, y: position.y + 1 })}
        className="pawn-move pawn-move-right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div
        onClick={() => setPosition({ x: position.x, y: position.y - 1 })}
        className="pawn-move pawn-move-left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  )
}

const Pawn: React.FC = () => {
  return (
    <div className="pawn">
      <PawnControls position={{ x: 0, y: 0 }} setPosition={() => {}} />
    </div>
  )
}

export { Pawn }
