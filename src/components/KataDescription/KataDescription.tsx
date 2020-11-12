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
                    Inside the <CodeComponent>Pawn</CodeComponent> component file is already implemented a component
                    <CodeComponent>PawnControls</CodeComponent> that allows to change the actual coordinates of a Pawn.
                    This may be useful for testing. Use it in your <CodeComponent>Pawn</CodeComponent> component
                    implementation.
                </p>

                <p style={{ textAlign: "left", fontSize: "14px" }}>
                    Documentation for <CodeFunction>ReactDOM.Portals</CodeFunction> can be found here:{" "}
                    <a href="https://reactjs.org/docs/portals.html" style={{ color: "#82b1af" }}>
                        https://reactjs.org/docs/portals.html
                    </a>
                </p>
            </div>
        </>
    );
};
