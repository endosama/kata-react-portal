import React from "react";
import { useCheckerContext } from "../../contexts/CheckerContext";
import { FakePawn } from "../FakePawn/FakePawn";
import "./MessageBox.css";

export const MessageBox = (): JSX.Element => {
    const { currentTurn } = useCheckerContext();
    return (
        <div className="message-box">
            {currentTurn % 2 === 0 ? (
                <FakePawn pawn={{ isAlive: true, color: "white" }} />
            ) : (
                <FakePawn pawn={{ isAlive: true, color: "black" }} />
            )}
            {"'s turn"}
        </div>
    );
};
