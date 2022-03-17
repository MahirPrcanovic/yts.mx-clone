import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
export const LoginContext = createContext();
export const LoginContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  onAuthStateChanged(auth, (currentU) => {
    setCurrentUser(currentU);
  });
  return (
    <LoginContext.Provider value={currentUser}>
      {props.children}
    </LoginContext.Provider>
  );
};
