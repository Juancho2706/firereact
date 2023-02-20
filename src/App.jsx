import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import "./FireBase/FireBase.jsx";
import { ToastContainer as Tostadacontainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { auth } from "./FireBase/FireBase";
import PostList from "./components/PostList";
import { useAuth } from "./components/Auth";




function App() {
  console.log('rendering APP')
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

 const user = useAuth()

  const handleSignInClose = () => setShowSignIn(false);
  const handleSignUpClose = () => setShowSignUp(false);

  const handleSignInShow = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpShow = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
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
                    await signOut(auth);
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
        <PostList />
        <Tostadacontainer />
      </div>
    </>
  );
}

export default App;
