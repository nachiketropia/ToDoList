import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Get organized, <br /> Stay productive.
        </h1>
        <br></br>
        <p>
          <h4>Streamline your tasks, boost your efficiency, and reclaim your time with our todo app.</h4>
        </p>
        <br></br>
        <Link to="/todo" className="home-btn p-2">Make Todo List</Link>
      </div>
    </div>
  );
};

export default Home;
