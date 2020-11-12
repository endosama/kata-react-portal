import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCheckerContext } from "../../contexts/CheckerContext";
import { MovementType } from "../../types/MovementType";
import { PawnProps } from "../../types/Pawn";
import "./PawnControls.css";

interface PawnControlsProps {
    pawn: PawnProps;
}

export const PawnControls: React.FC<PawnControlsProps> = ({ pawn }) => {
    const { getValidMovements, movePawn } = useCheckerContext();
    const validMovements = getValidMovements(pawn);
    return (
        <div className="pawn-move-container">
            {validMovements[MovementType.LT] && (
                <div onClick={() => movePawn(pawn, validMovements[MovementType.LT])} className="pawn-move pawn-move-lt">
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
            {validMovements[MovementType.LB] && (
                <div onClick={() => movePawn(pawn, validMovements[MovementType.LB])} className="pawn-move pawn-move-lb">
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
            {validMovements[MovementType.RB] && (
                <div onClick={() => movePawn(pawn, validMovements[MovementType.RB])} className="pawn-move pawn-move-rb">
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
            {validMovements[MovementType.RT] && (
                <div onClick={() => movePawn(pawn, validMovements[MovementType.RT])} className="pawn-move pawn-move-rt">
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
        </div>
    );
};
