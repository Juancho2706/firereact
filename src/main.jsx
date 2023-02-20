import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    {console.log('stoy en main b4 app')}
    <App />
  </TaskContextProvider>
);
