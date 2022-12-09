import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../api";
import { UserContext } from "../contexts/Contexts";

const Home = () => {
  const [loginStatus, setLoginStatus] = useState({
    success: false,
    message: "",
  });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    setLoginStatus({
      success: false,
      message: "logging in...",
    });
    getUsers().then((users) => {
      console.log(users);
      console.log(event.target[0].value);
      if (users.some((user) => user.username === event.target[0].value)) {
        console.log("Username Valid");
        setUser(event.target[0].value);
        console.log(user);
        navigate("/articles");
      } else {
        setLoginStatus({
          success: false,
          message: "Invalid Username",
        });
      }
    });
  };

  return (
    <div>
      <h2>Home</h2>
      <form
        onSubmit={(event) => {
          handleClick(event);
        }}
      >
        <label htmlFor="username"></label>
        <input id="username" type="text"></input>
        <button type="submit">Login</button>
        {loginStatus.message ? <p>{loginStatus.message}</p> : null}
      </form>
      <div id="login_testing">
        <br />
        <p>Login Help:</p>
        <p>
          Available usernames: tickle122 ,grumpy19, happyamy2016, cooljmessy,
          weegembump, jessjelly
        </p>
        <p>Debug: </p>
        <Link to="/articles"> Click to enter Site without a username</Link>
      </div>
    </div>
  );
};

export default Home;
