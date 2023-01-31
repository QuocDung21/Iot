import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../../firebase.config";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logout successful");
        Navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;
        // console.log("Login" + uid + " " + email);
        // ...
      } else {
        // Navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>

      <div className="flex text-center container mx-auto">
        <button onClick={Logout} className="btn btn-primary m-2">
          Logout
        </button>
        <button className="btn btn-primary m-2">Logout</button>
      </div>
    </div>
  );
};

export default Home;
