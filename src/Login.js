import React from "react";
import "./Login.css";
import "./spotify.js";
import { loginUrl } from "./spotify.js";

function Login() {
  return (
    <div className="login">
      <img src="/images/spotify-logo.jpg" alt="Spotify Logo"></img>
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
