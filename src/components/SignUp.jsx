import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";
import Tostadito from "./Tostadito.js";

function SignUp({ showUp, handleCloseUp }) {
  async function BotonSignUp(e) {
    e.preventDefault();
    const elformsignup = document.querySelector("#signupform");
    const emailsignup = elformsignup.querySelector(".emailsignup").value;
    const passsignup = elformsignup.querySelector(".passsignup").value;
    console.log(emailsignup, passsignup);

    try {
      const credencialesUser = await createUserWithEmailAndPassword(
        auth,
        emailsignup,
        passsignup
      );
      Tostadito("Bienvenido " + credencialesUser.user.email);
      handleCloseUp();
      console.log(credencialesUser);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        Tostadito("Email already in use", "error");
      } else if (error.code === "auth/invalid-email") {
        Tostadito("Invalid email", "error");
      } else if (error.code === "auth/weak-password") {
        Tostadito("Weak Password", "error");
      } else if (error.code) {
        Tostadito("Something went wrong :(", "error");
      }
    }
  }

  return (
    <Modal show={showUp} onHide={handleCloseUp}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="signupform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="emailsignup"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="passsignup"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              BotonSignUp(e);
            }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default SignUp;
