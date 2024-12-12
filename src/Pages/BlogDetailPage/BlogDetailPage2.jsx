import React from "react";
import "./BlogDetailPage.css";
import NavigationBar from "./../../Components/1-NavigationBar/NavigationBar";
import Footer from "../../Components/14-Footer/Footer";
import img from "../../Components/Images/Blog/individual.png";
import img2 from "../../Components/Images/Blog/Avatar Image.png";

import image from "../../Components/Images/Blog/b111.png";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import NavigationBar2 from "../../Components/NavigationBar-2/NavigationBar2";

const BlogDetailPage2 = () => {
  return (
    <div className="homepage">
      <NavigationBar2 />
      <div className="bolg-details">
        <div className="blog-details-top">
          <div className="blog-detail-top-left">
            <div>
              <img src={img2} alt="" />
            </div>
            <p>Insan Arafat Jamil</p>
          </div>
          <p className="blog-details-date">4 min read • Dec 12, 2024</p>
        </div>
        <div className="blog-details-image">
          <img src={image} alt="" />
        </div>
        <div className="blog-details-heading">
          <p>
            Transforming Air Quality Management: Factory Next Partners with
            Index Group
          </p>
        </div>
        <div className="blog-details-description">
          <p>
            "Factory Next is proud to announce a strategic partnership with
            Index Group, a pioneer in promoting sustainable industrial practices
            in Bangladesh. This collaboration, sealed through an MOU between our
            Chairman and CEO, Insan Arafat Jamil, and Index Group’s Founder and
            CEO, Shafiullah Al Munir, focuses on leveraging technology to tackle
            air quality challenges and promote sustainable growth.
            <br />
            <br />
            <b>Cutting-Edge Solutions for a Greener Future</b> <br />
            Combining Factory Next’s expertise in IoT and AI with Index Group’s
            commitment to quality and environmental preservation, this
            partnership will deliver. <br />
            <br />
            <b>IoT-Enabled Air Quality Monitoring:</b> Advanced sensors to
            provide real-time data on air quality and pollution levels.
            <br />
            <br />
            <b>Cloud-Based Portals:</b> Comprehensive platforms for public and
            user-specific visualization and reporting of environmental data.
            <br />
            <br />
            <b>AI for Environmental Solutions:</b> Intelligent algorithms for
            identifying anomalies, predicting trends, and implementing effective
            pollution control measures.
            <br />
            <br />
            <b>Versatile Product Offerings:</b>Solutions tailored for consumers,
            businesses, and government entities to promote sustainability and
            green practices.
            <br />
            <br />
            <br />
            <b>
              Why It Matters <br />
            </b>
            This collaboration is set to make a significant impact on
            industries, communities, and the environment by:
            <br />
            <br />
            <br />
            <b>
              Improving Air Quality: <br />
            </b>
            Enhancing the health and well-being of people by addressing
            pollution at its source.
            <br />
            <br />
            <br />
            <b>
              Driving Industrial Innovation:
              <br />
            </b>
            Helping factories adopt advanced technologies to operate more
            sustainably.
            <br />
            <br />
            <br />
            <b>
              Contributing to a Greener Bangladesh:
              <br />
            </b>
            Supporting the nation’s journey toward sustainable development
            through technology and innovation.
            <br /><br /><br />
            <p>
              At Factory Next, we believe that every technological breakthrough
              is a step toward a better tomorrow. By joining hands with Index
              Group, we are not just solving today’s challenges—we are creating
              a sustainable future for all.
            </p>
            
          </p>
        </div>
        <div className="blog-details-like-comment">
          <div className="blog-details-like">
            <FaRegThumbsUp className="blog-details-icons" /> <p>Like</p>
          </div>
          <div className="blog-details-comment">
            <MdOutlineInsertComment className="blog-details-icons" />{" "}
            <p>Comment</p>
          </div>
          <div className="blog-details-share">
            <RiShareForwardLine className="blog-details-icons" /> <p>Share</p>
          </div>
        </div>
        <div className="blog-details-add-comment">
          <div className="blogdetail-comment-image">
            <img src={img} alt="" />
          </div>
          <input
            type="text"
            placeholder="Add a comment..."
            className="blog-detail-commentBox"
          />
        </div>
        <div className="blog-details-show-comment">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="blog-detail-comment">
            <div className="blog-detail-comment-name">
              <p>Raisa Rajin</p> <RxDotFilled />{" "}
              <FaRegThumbsUp className="thumbsup" />{" "}
            </div>
            <p className="blog-detail-comment-detail">
              A at congue felis orci lacus nisi sed. Senectus neque commodo
              iaculis sed vivamus
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage2;
