import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Leaders.css';
import CardL from './CardLeader';
import image1 from '../Images/Leaders/image 62.png'
import image2 from '../Images/Leaders/image 63.png'


const Leaders = () => {
  const cards = [
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
    { title1: 'Nurun Nokib Anim',title2:'Business Analyst' ,image: image2},
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
    { title1: 'Nurun Nokib Anim',title2:'Business Analyst' ,image: image2},
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
    { title1: 'Nurun Nokib Anim',title2:'Business Analyst' ,image: image2},
    { title1: 'Insan Arafat Jamil',title2:'Founder & CEO' ,image: image1},
  ];

  const [itemsToShow, setItemsToShow] = useState(1);
  const [selectedDot, setSelectedDot] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1170) { // Full-screen size
        setItemsToShow(3);
      } else if (screenWidth >= 1180) { // Full-screen size
        setItemsToShow(3);
      } else if (screenWidth >= 800) { // Medium screen size
        setItemsToShow(2);
      } else { // Small screen size
        setItemsToShow(1);
      }
    };

    handleResize(); // Initial call to set initial items to show

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += itemsToShow) {
    chunkedCards.push(cards.slice(i, i + itemsToShow));
  }

  const cardGroups = chunkedCards.map((chunk, index) => (
    <div key={index} className="card-group">
      {chunk.map((card, cardIndex) => (
        <div key={index * itemsToShow + cardIndex} className="card-item">
          {card && <CardL title1={card.title1} title2={card.title2} image={card.image} />}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="challenges Leader">
      <p className='title'>Our Leaders</p>
      <div className='challenge-cards'>
      <Carousel className='carousel'
        showArrows={false} // Hide arrow buttons
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showIndicators={true}
        showThumbs={false}
        width="100%"
        selectedItem={selectedDot}
        onChange={setSelectedDot}
        renderIndicator={(clickHandler, isSelected, index, label) => {
          let dotStyle = {
            backgroundColor: isSelected ? '#393536' : '#CFCFCF',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer'
          };

          // Check if the current dot is the left dot of the selected dot
          if (index === selectedDot - 1) {
            dotStyle.backgroundColor = '#7B7979';
          }

          // Check if the current dot is the right dot of the selected dot
          if (index === selectedDot + 1) {
            dotStyle.backgroundColor = '#7B7979';
          }

          return (
            <li
              style={dotStyle}
              onClick={clickHandler}
              key={index}
              aria-label={`Go to slide ${index}`}
              title={label}
            ></li>
          );
        }}
      >
        {cardGroups}
      </Carousel>
      </div>
    </div>
  );
};

export default Leaders;
