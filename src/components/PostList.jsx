import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase.jsx";
import PostCarta from "./PostCarta.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function PostList() {
  const { x, modificarx } = useContext(TaskContext);

  useEffect(() => {
    const postearweas = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const arraysPostsData = [];
      querySnapshot.docs.forEach(async (doc) => {
        const postsdata = doc.data();
        console.log(doc.id);
        const lafoto = await postsdata.authorpic
        arraysPostsData.push(
          <PostCarta
            title={postsdata.title}
            content={postsdata.content}
            key={doc.id}
            fecha={postsdata.date}
            username={postsdata.author}
            usernamepic={lafoto}
          />
        );
      });
      modificarx(arraysPostsData);
    };

    postearweas();
    console.log(x)
    return postearweas;
  }, []);

  return <>{x}</>;
}
