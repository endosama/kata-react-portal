export type PawnColor = "black" | "white";

export interface PawnProps {
    index: number;
    x: number;
    y: number;
    color: PawnColor;
    isAlive: boolean;
    isDouble: boolean;
}
