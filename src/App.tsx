import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./apps/home/components/Home";
import NavBar from "./apps/home/components/NavBar";
import TodoApp from "./apps/todo-app/components/TodoApp";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/todo" exact>
          <TodoApp />
        </Route>
        <Route path="/*" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
