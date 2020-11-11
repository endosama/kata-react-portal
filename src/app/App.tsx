import React from "react"
import { KataDescription } from "../components/KataDescription/KataDescription"
import { KataCode } from "../components/Pawn/KataCode/KataCode"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KataDescription />
      </header>
      <main className="App-main">
        <KataCode />
      </main>
    </div>
  )
}

export default App
