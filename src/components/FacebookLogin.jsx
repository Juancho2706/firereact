import React from "react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { auth } from "../FireBase/FireBase.jsx";
import Tostadito from "./Tostadito.js";

export default function FacebookLogin({ handleClose }) {
  return (
    <Button
      variant="info"
      type="button"
      onClick={async (e) => {
        const provider = new FacebookAuthProvider();
        try {
          const credentials = await signInWithPopup(auth, provider);
          handleClose();
          Tostadito("Bienvenido " + credentials.user.displayName);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      Facebook
    </Button>
  );
}
