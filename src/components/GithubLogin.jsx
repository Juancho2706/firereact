import React from "react";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { auth } from "../App";
import Tostadito from "./Tostadito.js";

export default function GithubLogin({ handleClose }) {
  return (
    <Button
      variant="dark"
      type="button"
      onClick={async (e) => {
        const provider = new GithubAuthProvider();
        try {
          const credentials = await signInWithPopup(auth, provider);
          console.log(credentials);
          handleClose();
          Tostadito("Bienvenido " + credentials.user.displayName);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Github
    </Button>
  );
}
