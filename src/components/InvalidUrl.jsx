import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const InvalidUrl = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      navigate("/");
    }
  }, [counter]);

  return (
    <div className="App">
      <h3>Invalid Url, nothing to see here..</h3>
      <p>Returning to Home in: {counter}s</p>
      <Link to="/">
        <p>Click to go now</p>
      </Link>
    </div>
  );
};

export default InvalidUrl;
