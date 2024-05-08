import "./Image.css";
import React from "react";
import Video from "../Images/BackgroundVideo.mp4";

const image = () => {
  return (
    <section className="showcase">
      <video className="video" controls={false} autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="tag-line">
        <h2>Technology Ecosystem</h2>
        <h3>for Smart Factories</h3>
      </div>
    </section>
  );
};

export default image;
