import React, { useEffect } from "react";
import { getDocs, collection, orderBy,query } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase.jsx";
import PostCarta from "./PostCarta.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import compareAsc from "date-fns/compareAsc";
import format from "date-fns/format";

export default function PostList() {
  const { x, modificarx } = useContext(TaskContext);

  useEffect(() => {
    const postearweas = async () => {
      const q = query(collection(db, "posts"),orderBy("date","desc"))
      const querySnapshot = await getDocs(q);
      const arraysPostsData = [];
      querySnapshot.docs.forEach(async (doc) => {
        const postsdata = doc.data();
        const lafoto = await postsdata.authorpic;
        const fecha = new Date(postsdata.date.seconds * 1000).toLocaleDateString();
        arraysPostsData.push(
          <PostCarta
            title={postsdata.title}
            content={postsdata.content}
            key={doc.id}
            fecha={fecha}
            username={postsdata.author}
            usernamepic={lafoto}
          />
        );
      });
      modificarx(arraysPostsData);
    };
    postearweas();
    return postearweas;
  }, []);

  return <>{x}</>;
}
