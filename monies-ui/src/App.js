import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./js/components/NavBar"
import Transactions from "./js/components/Transactions"
import Balance from "./js/components/Balance"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>
        <div className="content">
          <Route path="/Balance">
            <Balance />
          </Route>
          <Switch>
            <Route path="/Transactions">
              <Transactions />
            </Route>
            <Route path="/">/</Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
