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
        <p className="tag-line1">Technology Ecosystem</p>
        <p className="tag-line2">for Smart Factories</p>
      </div>
    </section>
  );
};

export default image;
