import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/FireBase.jsx";
import Tostadito from "./Tostadito.js";
import GoogleLogin from "./googleLogin.jsx";
import FacebookLogin from "./FacebookLogin.jsx";
import { Card } from "react-bootstrap";
import GithubLogin from "./GithubLogin.jsx";

function SignIn({ show, handleClose }) {
  async function paraelsingin(e) {
    e.preventDefault();
    const emailin = document.querySelector(".emailsignin").value;
    const contrasena = document.querySelector(".passsignin").value;
    console.log(emailin);
    console.log(contrasena);
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        emailin,
        contrasena
      );
      Tostadito("Bienvenido " + credentials.user.email);
      console.log(credentials);
      handleClose();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Tostadito("Correo no enconrado", "error");
      } else if (error.code === "auth/wrong-password") {
        Tostadito("Password invalido", "error");
      } else if (error.code) {
        Tostadito("Something went wrong :(", "error");
      }
      console.log(error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="signinform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="emailsignin"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="passsignin"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-4"
            onClick={(e) => {
              paraelsingin(e);
            }}
          >
            Submit
          </Button>
        </Form>
        <Card style={{ gap: "10px" }} >
          <GoogleLogin handleClose={handleClose} />
          <FacebookLogin handleClose={handleClose} />
          <GithubLogin handleClose={handleClose} />
        </Card>
      </Modal.Body>
    </Modal>
  );
}
export default SignIn;
