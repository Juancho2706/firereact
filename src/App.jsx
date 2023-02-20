import { useState, useEffect } from "react";
import React from "react";
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
import PostList from "./components/PostList";
// import { useAuth } from "./components/Auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDciqhA9rSeIh97LbG653OmgqgP5rp2Xpk",
  authDomain: "proyectofirereact.firebaseapp.com",
  projectId: "proyectofirereact",
  storageBucket: "proyectofirereact.appspot.com",
  messagingSenderId: "741783428124",
  appId: "1:741783428124:web:4de5c0fbae51fa25b4d3d9",
  measurementId: "G-NKW8J423F1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

auth.onAuthStateChanged(async (user) => {
  console.log("stuff");
  if (user != null) {
    console.log(user);

  } else {
    console.log(user);

  }
});

function App() {
  console.log("rendering APP");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  //  const user = useAuth()

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
