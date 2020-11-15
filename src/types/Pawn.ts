export type PawnColor = "black" | "white";

export interface PawnProps {
    /* identifier of the pawn */
    index: number;
    /* x coordinate on the grid */
    x: number;
    /* y coordinate on the grid*/
    y: number;
    /* x color of the pawn: black or white */
    color: PawnColor;
    /* state of the pawn. When eaten set to false */
    isAlive: boolean;
    /* can move in both direction of the y axis */
    isDouble: boolean;
}
