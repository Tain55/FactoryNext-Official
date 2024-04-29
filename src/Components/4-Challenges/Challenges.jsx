import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Challenges.css';
import CardC from './CardC';
import image1 from '../Images/Challenges/image 30.png'





const Challenges = () => {
  const cards = [
    { title: 'Hidden Loss', image: image1},
    { title: 'Lack of Reliable Real-Time Data', image: image1},
    { title: 'No infrastructure for data driven decision making', image: image1},
    { title: 'Hidden Loss 2', image: image1},
    { title: 'Lack of Reliable Real-Time Data 2', image: image1},
    { title: 'No infrastructure for data driven decision making 2', image: image1},
    { title: 'Hidden Loss 3', image: image1},
    { title: 'Lack of Reliable Real-Time Data 2', image: image1},
    { title: 'No infrastructure for data driven decision making 3', image: image1},
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
          {card && <CardC title={card.title} image={card.image} />}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="challenges">
      <p className='title modify'>Industrial Landscape Challenges</p>
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
            backgroundColor: isSelected ? '#D7D7D7' : 'rgba(255, 255, 255, 0.301',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer'
          };

          // Check if the current dot is the left dot of the selected dot
          if (index === selectedDot - 1) {
            dotStyle.backgroundColor = 'rgba(255, 255, 255, 0.507';
          }

          // Check if the current dot is the right dot of the selected dot
          if (index === selectedDot + 1) {
            dotStyle.backgroundColor = 'rgba(255, 255, 255, 0.507';
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

export default Challenges;
