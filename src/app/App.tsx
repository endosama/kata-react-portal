import React from "react"
import { KataDescription } from "../components/KataDescription/KataDescription"
import { KataCode } from "../components/KataCode/KataCode"
import "./App.css"
import { CheckerContextProvider } from "../contexts/CheckerContext"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KataDescription />
      </header>
      <main className="App-main">
        <CheckerContextProvider>
          <KataCode />
        </CheckerContextProvider>
      </main>
    </div>
  )
}

export default App
