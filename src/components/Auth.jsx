// src/auth.js

import { useState, useEffect } from "react";
import { auth } from "../FireBase/FireBase";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  console.log('swaggers')
  return user;
};