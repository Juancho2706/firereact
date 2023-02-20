import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase.jsx";
import logoutsys from "./logoutsys.js";
import PostCarta from "./PostCarta.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function PostList() {
  const {x} = useContext(TaskContext);
  console.log(x);
  const [lospostshijos, usarLosPostsHijos] = useState([]);
  // onAuthStateChanged(
  //   auth,
  //   async (user) => {
  //     console.log("stuff");
  //     if (user != null) {
        
  //       console.log(user)
  //       logoutsys(user);
  //     } else {console.log(user)
  //       logoutsys(user);
  //     }
  //   },
    
  // );

  console.log(lospostshijos);
  return <>{lospostshijos}</>;
}
