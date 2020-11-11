export type PawnColor = "black" | "white";

export interface PawnProps {
    x: number;
    y: number;
    color: PawnColor;
    isAlive: boolean;
} 