import { PawnProps } from "../types/Pawn";
type Pawn = {
    x: number;
    y: number;
    color: "black" | "white";
    isAlive: boolean;
};

const pawnsNoIndex: Pawn[] = [
    { x: 0, y: 0, isAlive: true, color: "black" },
    { x: 0, y: 2, isAlive: true, color: "black" },
    { x: 0, y: 4, isAlive: true, color: "black" },
    { x: 0, y: 6, isAlive: true, color: "black" },
    { x: 1, y: 1, isAlive: true, color: "black" },
    { x: 1, y: 3, isAlive: true, color: "black" },
    { x: 1, y: 5, isAlive: true, color: "black" },
    { x: 1, y: 7, isAlive: true, color: "black" },
    { x: 2, y: 0, isAlive: true, color: "black" },
    { x: 2, y: 2, isAlive: true, color: "black" },
    { x: 2, y: 4, isAlive: true, color: "black" },
    { x: 2, y: 6, isAlive: true, color: "black" },

    { x: 5, y: 1, isAlive: true, color: "white" },
    { x: 5, y: 3, isAlive: true, color: "white" },
    { x: 5, y: 5, isAlive: true, color: "white" },
    { x: 5, y: 7, isAlive: true, color: "white" },
    { x: 6, y: 0, isAlive: true, color: "white" },
    { x: 6, y: 2, isAlive: true, color: "white" },
    { x: 6, y: 4, isAlive: true, color: "white" },
    { x: 6, y: 6, isAlive: true, color: "white" },
    { x: 7, y: 1, isAlive: true, color: "white" },
    { x: 7, y: 3, isAlive: true, color: "white" },
    { x: 7, y: 5, isAlive: true, color: "white" },
    { x: 7, y: 7, isAlive: true, color: "white" },
];
export const pawns: PawnProps[] = pawnsNoIndex.map((pawn, i) => {
    return {
        ...pawn,
        index: i,
        isDouble: false,
    };
});
