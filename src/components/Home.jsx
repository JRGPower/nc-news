import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
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
      <Link to="/articles"> Enter Site</Link>
    </div>
  );
};

export default Home;
