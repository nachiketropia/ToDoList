import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          <strong>About the App</strong><br />
          Welcome to our productivity revolution! Our to-do list app is designed to simplify your life and supercharge your productivity. With a sleek and intuitive interface, our app seamlessly integrates into your daily routine, helping you stay organized and focused on what matters most. From customizable task categories to smart prioritization features, every aspect of the app is crafted with your productivity in mind. Say goodbye to overwhelm and hello to a more organized, efficient you!<br />

          <strong>Let's Connect</strong><br />
          Ready to join the productivity revolution? Connect with Arjun Tyagi on <a href="https://www.linkedin.com/in/arjuntyagi19/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to stay updated on the latest app developments, productivity tips, and more! Whether you have feedback, questions, or just want to say hello, Arjun is always eager to connect with fellow productivity enthusiasts. Want to dive deeper into the tech behind the app? Explore the code on <a href="https://github.com/arjuntyagi19/ToDo_MernStack" target="_blank" rel="noopener noreferrer">GitHub</a> and contribute to making our app even better. Together, let's build a community dedicated to maximizing productivity and achieving our goals.

          Happy organizing!<br></br>
          <br></br>
          Arjun Tyagi
        </p>
      </div>
    </div>
  );
};

export default About;
