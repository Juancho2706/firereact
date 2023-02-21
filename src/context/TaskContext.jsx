import { createContext } from "react";
import { useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  
  const [x, usex] = useState([]);
  const modificarx = (stuff) => {
    usex(stuff);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [yarenderizoApp, setYarenderizoApp] = useState(false);
  const [yaexisteusuario, setYauser] = useState(false);
  const handleSignInClose = () => setShowSignIn(false);
  const handleSignUpClose = () => setShowSignUp(false);
  const [loading,setLoading] = useState(false)

  const handleSignInShow = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpShow = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };
  return (
    <TaskContext.Provider value={{ x,usex,loading,setLoading, modificarx, loggedIn,showSignIn,showSignUp,yarenderizoApp,yaexisteusuario,handleSignUpClose,handleSignInClose, handleSignUpShow,handleSignInShow,setLoggedIn,setShowSignIn,setYauser,setShowSignUp }}>
      {props.children}
    </TaskContext.Provider>
  );
}
