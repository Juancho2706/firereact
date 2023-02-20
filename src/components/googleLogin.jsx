import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { auth } from "../FireBase/FireBase.jsx";
import Tostadito from "./Tostadito.js";

export default function GoogleLogin({ handleClose }) {
  return (
    <Button
      variant="danger"
      type="button"
      onClick={async (e) => {
        const provider = new GoogleAuthProvider();
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
      Google
    </Button>
  );
}
