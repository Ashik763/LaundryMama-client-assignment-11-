import React, { useContext, useState } from "react";
import "./LogIn.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
 

  const [user,setUser] = useState({
    signedIn : false,
    email: '',
    displayName:''
  });

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let {from } = location.state || {from: {pathname: "/"}};

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        var token = credential.accessToken;
        var user = result.user;
        // console.log(user);
        const signedInUser = { signedIn: true,email:user.email,displayName:user.displayName}
        setUser(signedInUser);
        setLoggedInUser(signedInUser)
        if(user){
          history.replace(from);
        }
     
      })
      .catch((error) => {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
        var email = error.email;
        
        var credential = error.credential;
    
      });
  };

  return (
    <div className=" text-center">
      <div className="text-center second-div p-5 ">
        {/* <h1> Google Sign In</h1>
        <br /> <br />
        Email: <input type="text" placeholder="email" />
        <br />
        <br />
        Password: <input type="password" placeholder="password" />
        <br />
        <br /> */}
        <button className="btn btn-dark" onClick={handleGoogleLogin}>
          {" "}
          Google Sign In{" "}
        </button>
      </div>
    </div>
  );
};

export default LogIn;
