export type PawnColor = "black" | "white";

export interface Pawn {
    x: number;
    y: number;
    color: PawnColor;
    isAlive: boolean;
} 