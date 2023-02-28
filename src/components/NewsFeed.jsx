import { useState, useEffect } from "react";
import { db } from "../FireBase/FireBase";


function NewsFeed() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      db.ref("posts").on("value", (snapshot) => {
        const postList = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          postList.push(childData);
        });
        setPosts(postList);
      });
    }, []);
  
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default NewsFeed;
