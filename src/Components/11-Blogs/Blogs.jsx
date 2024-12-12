import "./Blogs.css";

import React from "react";
import BlogComponent from "./BlogComponent";
import { Link } from "react-router-dom";
import BlogComponent2 from "./BlogComponent2";

const Blogs = () => {
  return (
    <>
      <div className="Blogs-body">
        <p className="title">Blogs & Articles</p>
        <div className="blogs">
          <div>
            <div className="blogLarge">
              <div className="Blogs-description ">
                <BlogComponent />
                {/* <BlogComponent/>
                <BlogComponent/> */}
              </div>
            </div>
            <div className="blogMedium">
              <div className="Blogs-description ">
                <BlogComponent />
                {/* <BlogComponent/> */}
              </div>
            </div>
            <div className="blogSmall">
              <div className="Blogs-description ">
                <BlogComponent />
              </div>
            </div>
          </div>

          <div>
            <div className="blogLarge">
              <div className="Blogs-description ">
                <BlogComponent2 />
              </div>
            </div>
            <div className="blogMedium">
              <div className="Blogs-description ">
                <BlogComponent2 />
              </div>
            </div>
            <div className="blogSmall">
              <div className="Blogs-description ">
                <BlogComponent2 />
              </div>
            </div>
          </div>
        </div>

        <Link
          to={"/blogs"}
          style={{ textDecoration: "none", color: "#1570ef" }}
        >
          <div className="blogButton">Explore All</div>
          {/* <button>Explore All</button> */}
        </Link>
      </div>
    </>
  );
};

export default Blogs;
