import React from "react";
import "../Pawn/Pawn.css";
import { PawnProps } from "../../types/Pawn";

const FakePawn: React.FC<{ pawn: Partial<PawnProps> }> = ({ pawn }): JSX.Element => {
    return <div className={`pawn ${pawn.color === "black" ? "pawn-black" : ""}`} />;
};

export { FakePawn };
