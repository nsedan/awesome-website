import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./apps/home/components/Home";
import NavBar from "./apps/home/components/NavBar";
import TodoApp from "./apps/todo-app/components/TodoApp";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/todo">
            <Route index element={<TodoApp />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
