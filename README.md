# Getting Started with ReactDOM.Portals

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Simple kata project that involve the use of ReactDOM.Portals

## Goals

- Create a <Chessboard> component
- Place a <Pawn> component on the <Chessboard> using ReactDOM.Portals
- Place pawns for each pawn inside the pawns (./src/data/pawns) array on the <Chessboard>

Implement the code inside the <KataCode> file and child components. The <Pawn> is already created in the components folder but will need some changes.

Create the Chessboard component so that's easy to find a square depending on its coordinares (x,y)

Inside the <Pawn> component file is already implemented a component<PawnControls> that allows to change the actual coordinates of a Pawn. This may be useful for testing. Use it in your <Pawn> component implementation.

All the css styles needed should be already implemented (except the <Chessboard> ones).

Documentation for ReactDOM.Portals can be found here: https://reactjs.org/docs/portals.html


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn lint --fix`

Run eslint and fix all the fixable errors.
