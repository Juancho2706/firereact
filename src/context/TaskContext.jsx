import { createContext } from "react";
import { useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  
  const [x, usex] = useState([]);
  const modificarx = (stuff) => {
    usex(x.push(stuff));
  };
  return (
    <TaskContext.Provider value={{ x, modificarx }}>
      {props.children}
    </TaskContext.Provider>
  );
}
