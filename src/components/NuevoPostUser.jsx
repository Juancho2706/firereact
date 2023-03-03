import React from "react";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { db,auth } from "../FireBase/FireBase";
import { setDoc, collection, doc, Timestamp } from "firebase/firestore";
import { TaskContext } from "../context/TaskContext";
import PostCarta from "./PostCarta";


function NuevoPostUser() {
  const {
    inputTitle,
    setInputTitle,
    inputContent,
    setInputContent,
    collectionRef,
    x,
    modificarx,
  } = useContext(TaskContext);

  const nuevafecha = () => {
    const date = new Date();
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return date.toLocaleString("en-US", options);
  };

  const modificarlosposts = (title, content, id, date,author,authorpic) => {
    const arraysPostsData = x;
    arraysPostsData.unshift(
      <PostCarta title={title} content={content} key={id} fecha={date} username={author} usernamepic={authorpic}/>
    );
    modificarx(arraysPostsData);
  };

  const handleInputTitle = (event) => {
    setInputTitle(event.target.value);
  };
  const handleInputContent = (event) => {
    setInputContent(event.target.value);
  };


  const enviodepost = async (e) => {
    try {
      e.preventDefault();
      
      let newsetdate = Timestamp.fromDate(new Date())
      const newPostDocRef = await doc(collectionRef); // Crea una referencia al nuevo documento con ID aleatorio
      await setDoc(newPostDocRef, {
        title: inputTitle,
        content: inputContent,
        date: newsetdate,
        author: auth.currentUser.displayName,
        authorpic: auth.currentUser.photoURL
      });
      console.log(auth.currentUser)
      const fecha = new Date(newsetdate.seconds * 1000).toLocaleDateString();
      modificarlosposts(inputTitle, inputContent, newPostDocRef.id, fecha, auth.currentUser.displayName, auth.currentUser.photoURL);
      setInputContent("");
      setInputTitle("");
      document.getElementById("formBasicTitle").value = ""
      document.getElementById("formBasicDescription").value = ""
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card >
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe aca un titulo..."
              onChange={handleInputTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe aca un contenido..."
              onChange={handleInputContent}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              enviodepost(e);
            }}
          >
            Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default NuevoPostUser;
