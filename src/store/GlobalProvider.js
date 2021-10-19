import React from "react";
import { useReducer, useState } from "react";
import { auth, provider } from "../firebase/firebaseconfig";
const initialState = {
  user: null,
};

//context
export const GlobalContext = React.createContext(initialState);

//functions

export const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  function signUp(email, pass) {
    console.log("SignUP");
    return auth
      .createUserWithEmailAndPassword(email, pass)
      .then((data) => setCurrentUser(data.user));
  }

  function logIn(email, pass) {
    return auth
      .signInWithEmailAndPassword(email, pass)
      .then((data) => setCurrentUser(data.user));
  }
  const signInGoogle = () => {
    auth.signInWithPopup(provider).then((result) => {
      setCurrentUser(result.user);
      console.log(result.user);
    });
  };
  function signOut() {
    auth.signOut();
    setCurrentUser(null);
  }
  const value = {
    user: currentUser,
    signUp,
    logIn,
    signOut,
    signInGoogle,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
