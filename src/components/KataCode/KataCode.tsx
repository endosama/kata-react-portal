import React from "react";
import "./KataCode.css";
import { MessageBox } from "../MessageBox/MessageBox";
import { Chessboard } from "../Chessboard/Chessboard";

export const KataCode: React.FC = () => {
    return (
        <>
            <Chessboard />
            {/*
                Draw the pawns here
            */}
            <MessageBox />
        </>
    );
};
