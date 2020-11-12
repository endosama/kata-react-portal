import React, { useEffect, useState } from "react";
import { useCheckerContext } from "../../contexts/CheckerContext";
import "./KataCode.css";
import { PawnProps } from "../../types/Pawn";
import { Chessboard } from "../Chessboard/Chessboard";
import { Pawn } from "../Pawn/Pawn";
import { FakePawn } from "../FakePawn/FakePawn";

export const KataCode: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const { pawns, currentTurn } = useCheckerContext();
    useEffect(() => {
        setLoaded(true);
    });
    return (
        <>
            <Chessboard />
            {loaded &&
                pawns.map((pawn: PawnProps, i: number) => {
                    return <Pawn key={i} pawn={pawn} />;
                })}
            <div className="message-box">
                {currentTurn % 2 === 0 ? (
                    <FakePawn pawn={{ isAlive: true, color: "white" }} />
                ) : (
                    <FakePawn pawn={{ isAlive: true, color: "black" }} />
                )}
                {"'s turn"}
            </div>
        </>
    );
};
