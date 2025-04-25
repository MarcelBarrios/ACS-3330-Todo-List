import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterControls from "./components/FilterControls";
import SortingControls from "./components/SortingControls"; // 1️⃣

import './App.css'

function App() {
  return (
    <div>
      <h1>Redux To-Do List</h1>
      <AddTodo />
      <FilterControls />
      <SortingControls /> {/* 2️⃣ */}
      <TodoList />
    </div>
  );
}

export default App;