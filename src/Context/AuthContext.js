import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10$",
      id: "aaaaa",
    },
  ]);
  return (
    <LoginContext.Provider value={[movies, setMovies]}>
      {props.children}
    </LoginContext.Provider>
  );
};
