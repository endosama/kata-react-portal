import React from "react";
import { FakePawn } from "../FakePawn/FakePawn";

const CodeComponent: React.FC = ({ children }) => (
    <strong style={{ color: "#45b193" }}>
        {"<"}
        {children}
        {">"}
    </strong>
);
const CodeFunction: React.FC = ({ children }) => <strong style={{ color: "#c8d67c" }}>{children}</strong>;
export const KataDescription = (): JSX.Element => {
    return (
        <>
            <p
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {"Let's implement Checkers"}
                <FakePawn pawn={{}} />
            </p>
            <div style={{ fontSize: "18px" }}>
                <ul style={{ textAlign: "left" }}>
                    <li>
                        Create a <CodeComponent>Chessboard</CodeComponent> component
                    </li>
                    <li>
                        Place a <CodeComponent>Pawn</CodeComponent> component on the&nbsp;
                        <CodeComponent>Chessboard</CodeComponent> using&nbsp;
                        <CodeFunction>ReactDOM.Portals</CodeFunction>{" "}
                    </li>

                    <li>
                        Place pawns for each pawn inside the <strong style={{ color: "#d27765" }}>{"pawns"}</strong>{" "}
                        <code style={{ fontSize: "14px" }}>(./src/data/pawns) </code>
                        array on the <CodeComponent>Chessboard</CodeComponent>
                    </li>
                </ul>

                <p style={{ textAlign: "left", fontSize: "14px" }}>
                    Implement the code inside the <CodeComponent>KataCode</CodeComponent> file and child components. The{" "}
                    <CodeComponent>Pawn</CodeComponent> is already created in the components folder but will need some
                    changes.
                </p>
                <p style={{ textAlign: "left", fontSize: "14px" }}>
                    {"Create the Chessboard component so that's easy to find a square depending on its coordinares "}
                    <code>(x,y)</code>
                </p>

                <p style={{ textAlign: "left", fontSize: "14px" }}>
                    All the css styles needed should be already implemented (except the{" "}
                    <CodeComponent>Chessboard</CodeComponent> ones).{" "}
                    {"If you don't want to spend too much time on styling "}
                    you can find the css code (and also the component implementation in a feature branch{" "}
                    <CodeFunction>kata/checkboard</CodeFunction>... yeah, the name is wrong 🤦‍♂️)
                </p>

                <p style={{ textAlign: "left", fontSize: "14px" }}>
                    The movement logic for the pawns on the chessboard is already implemented in the{" "}
                    <CodeComponent>PawnControls</CodeComponent> component that consumes a{" "}
                    <CodeFunction>CheckerContext</CodeFunction> with all the logic and the updated on the board state.
                    Some arrows will be shown over the <CodeComponent>Pawn</CodeComponent> when hovering it. This arrow
                    will allow you to change the coordinates of the pawn and to test you code.
                </p>
            </div>
            <p style={{ textAlign: "left", fontSize: "14px" }}>
                Documentation for <CodeFunction>ReactDOM.Portals</CodeFunction> can be found here:{" "}
                <a href="https://reactjs.org/docs/portals.html" style={{ color: "#82b1af" }}>
                    https://reactjs.org/docs/portals.html
                </a>
            </p>
            {/* <div
                style={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    fontSize: "12px",
                }}
            >
                <p>The actual implementation is not tested and may contain errors</p>
            </div> */}
        </>
    );
};
