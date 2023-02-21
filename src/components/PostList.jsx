import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase.jsx";
import logoutsys from "./logoutsys.js";
import PostCarta from "./PostCarta.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function PostList() {
  const { x, modificarx, usex } = useContext(TaskContext);

  console.log(x);

  useEffect(() => {
    const postearweas = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const arraysPostsData = [];
      querySnapshot.docs.forEach((doc) => {
        console.log("contador: " + 1);
        const postsdata = doc.data();
        console.log(postsdata);
        // return (
        //   <PostCarta title={postsdata.title} content={postsdata.content} />
        // );
        arraysPostsData.push(
          <PostCarta
            title={postsdata.title}
            content={postsdata.content}
            key={doc.id}
          />
        );
      });
      modificarx(arraysPostsData)
    };
    console.log("UGGGGGGGGGG");
    postearweas();
    return postearweas;
  }, []);
  console.log(x);
  return <>{x}</>;
}
