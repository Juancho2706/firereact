// src/auth.js

import { useState, useEffect } from "react";
import { auth } from "../App";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

   
  }, []);
  console.log('swaggers')
  return user;
};
