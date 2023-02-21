import { useState, useEffect, useContext } from "react";
import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./FireBase/FireBase.jsx";
import { ToastContainer as Tostadacontainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { auth } from "./FireBase/FireBase";
import PostList from "./components/PostList";
import { TaskContext } from "./context/TaskContext";

function App() {
  console.log("rendering APP");
  const {
    loggedIn,
    loading,
    setLoading,
    showSignIn,
    showSignUp,
    yarenderizoApp,
    yaexisteusuario,
    handleSignUpShow,
    handleSignInShow,
    handleSignInClose,
    handleSignUpClose,
    setLoggedIn,
    setShowSignIn,
    setYauser,
    setShowSignUp,
  } = useContext(TaskContext);

  useEffect(() => {
    if (yaexisteusuario == false) {
      const unsubscribe = () => {
        auth.onAuthStateChanged(async (user) => {
          console.log("stuff");
          if (user) {
            setYauser(true);
            setLoggedIn(true);
            console.log(user);
            setLoading(true)
          } else {
            console.log(user);
            setLoggedIn(false);
            setLoading(true)
          }
        });
      };

      return unsubscribe();
    }
  }, []);

  return (
    <>{loading? (<><Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="sinlog">
            <Nav className="ms-auto">
              {loggedIn ? (
                <Nav.Link
                  href="#logout"
                  className="thelogouts"
                  onClick={async () => {
                    setYauser(false);
                    setLoading(false)
                    await signOut(auth);
                    // unsubscribe()
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    href="#home"
                    onClick={handleSignInShow}
                    className="thelogins"
                  >
                    Sign-in
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    onClick={handleSignUpShow}
                    className="thelogins"
                  >
                    Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {!loggedIn && (
        <>
          <SignIn show={showSignIn} handleClose={handleSignInClose} />
          <SignUp showUp={showSignUp} handleCloseUp={handleSignUpClose} />
        </>
      )}

      <div className="contenido">
        {loggedIn ? <PostList /> : <></>}
        <Tostadacontainer />
      </div></>) : (<>LOADING...</>)}
    </>
  );
}

export default App;
