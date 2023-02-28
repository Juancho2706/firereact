import { createContext } from "react";
import { useState } from "react";
import { doc,collection,setDoc } from "firebase/firestore";
import { db } from "../FireBase/FireBase";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  
  const [x, usex] = useState([]);
  const modificarx = (stuff) => {
    usex(stuff);
  };
  //NUEVO POST USER
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputDate, setInputDate] = useState()
  const collectionRef = collection(db, "posts");

  
  //
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
    <TaskContext.Provider value={{ inputDate,setInputDate,x,inputTitle, setInputTitle,inputContent, setInputContent,collectionRef,usex,loading,setLoading, modificarx, loggedIn,showSignIn,showSignUp,yarenderizoApp,yaexisteusuario,handleSignUpClose,handleSignInClose, handleSignUpShow,handleSignInShow,setLoggedIn,setShowSignIn,setYauser,setShowSignUp }}>
      {props.children}
    </TaskContext.Provider>
  );
}
