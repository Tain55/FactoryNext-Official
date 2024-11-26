import React from "react";
import CardL from "../10-Leaders/CardLeader";
import jamil from "../Images/Leaders/Jamil-Bhai.png";
import raihan from "../Images/Leaders/Rakib-Bhai.png";
import intekhab from "../Images/Leaders/Toni-Bhai.png";
import arif from "../Images/Leaders/arif sir.jpg";
import fahmida from "../Images/Leaders/female.png";

import "./ourleader.css";
const Ourleader = () => {
  return (
    <div className="OurLeaderBody">
      <p className="heading-ourLeaders">Our Leaders</p>
      <div className="contents-ourL">
        <div className="first-contents-ourL">
          <CardL
            title1="Insan Arafat Jamil"
            title2="Chairman & CEO"
            image={jamil}
            email="jamil@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
          />
          <CardL
            title1="Intekhab Alam"
            title2="Managing Director"
            image={intekhab}
            // email="intekhab@factorynext.com.bd"
            // linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
          />
          <CardL
            title1="Raihan Rakib"
            title2="Director, Business Developement"
            image={raihan}
            // email="raihan@factorynext.com.bd"
            // linkedIn="https://www.linkedin.com/in/abdullah-al-mamun-47924aa6"
          />
        </div>
        <div className="second-contents-ourL">
          <CardL
            title1="Dr. Arif Iftakher Mahmood"
            title2="Co-founder and Chairman"
            image={arif}
            email="arifmahmood@factorynext.com.bd"
            linkedIn=""
          />
          <CardL
            title1="Fahmida Chowdhury"
            title2="Director, Software Technology"
            image={fahmida}
            // email="fahmida@factorynext.com.bd"
            // linkedIn="https://www.linkedin.com/in/anik-islam-shojib-495ba5104"
          />
        </div>
      </div>

      <div className="contentsOurL2">
        <CardL
          title1="Insan Arafat Jamil"
          title2="Chairman & CEO"
          image={jamil}
          email="jamil@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
        />
        <CardL
          title1="Intekhab Alam"
          title2="Managing Director"
          image={intekhab}
          // email="intekhab@factorynext.com.bd"
          // linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
        />
        <CardL
          title1="Raihan Rakib"
          title2="Director, Business Developement"
          image={raihan}
          // email="raihan@factorynext.com.bd"
          // linkedIn="https://www.linkedin.com/in/abdullah-al-mamun-47924aa6"
        />
        <CardL
          title1="Dr. Arif Iftakher Mahmood"
          title2="Co-founder and Chairman"
          image={arif}
          email="arifmahmood@factorynext.com.bd"
          linkedIn=""
        />
        <CardL
          title1="Fahmida Chowdhury"
          title2="Director, Software Technology"
          image={fahmida}
          // email="fahmida@factorynext.com.bd"
          // linkedIn="https://www.linkedin.com/in/anik-islam-shojib-495ba5104"
        />
      </div>
    </div>
  );
};

export default Ourleader;
