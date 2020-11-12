import React from "react";
import "./Pawn.css";
import { PawnProps } from "../../types/Pawn";
import { PawnControls } from "../PawnControls/PawnControls";

const Pawn: React.FC<{ pawn: PawnProps }> = ({ pawn }) => {
    return (
        <>
            {pawn.isAlive && (
                <div className="pawn-container">
                    <div
                        className={`pawn ${pawn.color === "black" ? "pawn-black" : ""} ${
                            pawn.isDouble ? "pawn-double" : ""
                        }`}
                    />
                    <PawnControls pawn={pawn} />
                </div>
            )}
        </>
    );
};

export { Pawn };
