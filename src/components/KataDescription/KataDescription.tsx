import React from "react"
import { Pawn } from "../Pawn/Pawn"

const CodeComponent: React.FC = ({ children }) => (
  <strong style={{ color: "#45b193" }}>
    {"<"}
    {children}
    {" />"}
  </strong>
)
const CodeFunction: React.FC = ({ children }) => (
  <strong style={{ color: "#c8d67c" }}>
    {"<"}
    {children}
    {" />"}
  </strong>
)
export const KataDescription = () => {
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
        Let's implement Checkers
        <Pawn />
      </p>
      <div style={{ fontSize: "18px" }}>
        <ul style={{ textAlign: "left" }}>
          <li>
            Create a <CodeComponent>Chessboard</CodeComponent> component
          </li>
          <li>
            Place a <CodeComponent>Pawn</CodeComponent> component on the&nbsp;
            <CodeComponent>Chessboard</CodeComponent> using&nbsp;
            <CodeFunction>React.Portals</CodeFunction>{" "}
          </li>

          <li>
            Place pawns for each pawn inside the{" "}
            <strong style={{ color: "#d27765" }}>{"pawns"}</strong> array on the{" "}
            <CodeComponent>Chessboard</CodeComponent>
          </li>
        </ul>

        <p style={{ textAlign: "left", fontSize: "16px" }}>
          Implement the code inside the <CodeComponent>KataCode</CodeComponent>{" "}
          file and child components. The <CodeComponent>Pawn</CodeComponent> is
          already created in the components folder but will need some changes.
        </p>
        <p style={{ textAlign: "left", fontSize: "16px" }}>
          Create the Chessboard component so that's easy to find a square
          depending on its coordinares <code>(x,y)</code>
        </p>
        <p style={{ textAlign: "left", fontSize: "16px" }}>
          Inside the <CodeComponent>Pawn</CodeComponent> component file is
          already implemented a component
          <CodeComponent>PawnControls</CodeComponent> that allows to change the
          actual coordinates of a Pawn. This may be useful for testing. Use it
          in your <CodeComponent>Pawn</CodeComponent> component implementation.
        </p>
        <p style={{ textAlign: "left", fontSize: "16px" }}>
          Documentation for <CodeFunction>React.Portals</CodeFunction> can be
          found here:{" "}
          <a
            href="https://reactjs.org/docs/portals.html"
            style={{ color: "#82b1af" }}
          >
            https://reactjs.org/docs/portals.html
          </a>
        </p>
      </div>
    </>
  )
}
