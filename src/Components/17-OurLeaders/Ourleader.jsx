import React from "react";
import CardL from "../10-Leaders/CardLeader";
import imageface1 from "../Images/Leaders/image 62.png";
import arif from "../Images/Leaders/arif sir.jpg";
import mamun from "../Images/Leaders/mamun.jpeg";
import plabon from "../Images/Leaders/plabon.jpg";
import anik from "../Images/Leaders/anik.jpeg";
import naib from "../Images/Leaders/naib.jpeg";
import "./ourleader.css";
const Ourleader = () => {
  return (
    <div className="OurLeaderBody">
      <p className="heading-ourLeaders">Our Leaders</p>
      <div className="contents-ourL">
        <div className="first-contents-ourL">
          <CardL
            title1="Insan Arafat Jamil"
            title2="Founder & CEO"
            image={imageface1}
          />
          <CardL
            title1="Dr. Arif Iftakher Mahmood
"
            title2="Co-founder  &  Advisor
"
            image={arif}
          />
          <CardL
            title1="Abdullah Al Mamun"
            title2="Co-founder  &  Advisor
"
            image={mamun}
          />
        </div>
        <div className="second-contents-ourL">
          <CardL
            title1="Plabon Dutta"
            title2="Technical Director"
            image={plabon}
          />
          <CardL
            title1="Anik Islam Sajib"
            title2="Technical Director"
            image={anik}
          />
          <CardL
            title1="Naib Hossain Khan"
            title2="Technical Director"
            image={naib}
          />
        </div>
      </div>

      <div className="contentsOurL2">
      <CardL
            title1="Insan Arafat Jamil"
            title2="Founder & CEO"
            image={imageface1}
          />
          <CardL
            title1="Dr. Arif Iftakher Mahmood
"
            title2="Co-founder  &  Advisor
"
            image={arif}
          />
          <CardL
            title1="Abdullah Al Mamun"
            title2="Co-founder  &  Advisor
"
            image={mamun}
          />
        <CardL
          title1="Anik Islam Sajib"
          title2="Technical Director"
          image={anik}
        />
        <CardL
          title1="naib Hossain Khan"
          title2="Technical Director"
          image={naib}
        />
      </div>
    </div>
  );
};

export default Ourleader;
