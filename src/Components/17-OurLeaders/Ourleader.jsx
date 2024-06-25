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
            title1="Dr. Arif Iftakher Mahmood
"
            title2="Co-founder and Chairman
"
            image={arif}
            email="arifmahmood@factorynext.com.bd"
            linkedIn=""
          />
           <CardL
            title1="Insan Arafat Jamil"
            title2="Founder & CEO"
            image={imageface1}
            email="jamil@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
          />
          <CardL
            title1="Abdullah Al Mamun"
            title2="Co-founder and CTO
"
            image={mamun}
            email="mamun@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/abdullah-al-mamun-47924aa6"
          />
        </div>
        <div className="second-contents-ourL">
          <CardL
            title1="Plabon Dutta"
            title2="Technical Director"
            image={plabon}
            email="plabon@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/plabon-dutta-29231931/"
          />
          <CardL
            title1="Anik Islam Sajib"
            title2="Technical Director"
            image={anik}
            email="anik@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/anik-islam-shojib-495ba5104"
          />
          <CardL
            title1="Naib Hossain Khan"
            title2="Technical Director"
            image={naib}
            email="naib@factorynext.com.bd"
            linkedIn="https://www.linkedin.com/in/naibkhan/"
          />
        </div>
      </div>

      <div className="contentsOurL2">
        
        <CardL
          title1="Dr. Arif Iftakher Mahmood
"
          title2="Co-founder and Chairman
"
          image={arif}
          email="arifmahmood@factorynext.com.bd"
          linkedIn=""
        />
        <CardL
          title1="Insan Arafat Jamil"
          title2="Founder & CEO"
          image={imageface1}
          email="jamil@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/insan-arafat-jamil/"
        />
        <CardL
          title1="Abdullah Al Mamun"
          title2="Co-founder and CTO
"
          image={mamun}
          email="mamun@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/abdullah-al-mamun-47924aa6"
        />
        <CardL
          title1="Plabon Dutta"
          title2="Technical Director"
          image={plabon}
          email="plabon@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/plabon-dutta-29231931/"
        />
        <CardL
          title1="Anik Islam Sajib"
          title2="Technical Director"
          image={anik}
          email="anik@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/anik-islam-shojib-495ba5104"
        />
        <CardL
          title1="Naib Hossain Khan"
          title2="Technical Director"
          image={naib}
          email="naib@factorynext.com.bd"
          linkedIn="https://www.linkedin.com/in/naibkhan/"
        />
      </div>
    </div>
  );
};

export default Ourleader;
