import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

const root = createRoot(destination);
root.render(
  <div>
    <TodoList />
  </div>
);

