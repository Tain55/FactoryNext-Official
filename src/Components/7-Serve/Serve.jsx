import './Serve.css'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardS from './CardServe';
import image1 from '../Images/serve/close-up-bunch-different-colored-fabric-generative-ai 1.png';
import image2 from '../Images/serve/silhouette-high-voltage-electric-tower-sunset-time-sky-sunset-time-background 1.png';
import imag1 from '../Images/serve/new/RMG-&-Textile.png';
import imag2 from '../Images/serve/new/Power-Gen.-Distribution.png';
import imag3 from '../Images/serve/new/Electronics-Manufacturing.png';
import imag4 from '../Images/serve/new/Chemical-&-Pharmaceuticals.png';
import imag5 from '../Images/serve/new/Cold-storage-&-Warehouse.png';
import imag6 from '../Images/serve/new/Smart-Farming.png';
import imag7 from '../Images/serve/new/Smart-Fisheries.png';
import imag8 from '../Images/serve/new/Scientific-Research.png';
import imag9 from '../Images/serve/new/Agro-&-Food-Processing.png';
import imag10 from '../Images/serve/new/Leather-Processing.png';

const Serve = () => {
  const cards = [
    { title: 'RMG & Textile', image: imag1, description: "Optimizing production and reducing waste with IoT for real-time machine and environmental monitoring, alongside AI based solutions."},
    { title: 'Power Gen. & Distribution', image: imag2 , description: "Enhancing grid reliability and energy efficiency through IoT-enabled energy monitoring, machine monitoring and predictive maintenance."},
    { title: 'Electronics Manufacturing', image: imag3 , description: "Leveraging smart controllers, machine monitoring, and AI analytics to optimize production lines and quality control."},
    { title: 'Chemical & Pharmaceuticals ', image: imag4, description: "IoT solutions ensure precise process and environmental control, enhancing safety and compliance in sensitive operations."},
    { title: 'Cold-storage & Warehouse', image: imag5 , description: "IoT devices for temperature and humidity control, improving storage conditions and reducing energy usage."},
    { title: 'Smart Farming', image: imag6 , description: "Data-driven insights and automated controls boost crop yields and resource management through environmental and machine monitoring."},
    { title: 'Smart Fisheries', image: imag7 , description: "Implementing water quality and environmental monitoring to enhance fish health and optimize resource usage."},
    { title: 'Scientific Research', image: imag8 , description: "Facilitating cutting-edge research with tailored IoT solutions for environmental data collection and experiment management."},
    { title: 'Agro & Food Processing', image: imag9 , description: "Streamlining operations with automated process controls, environmental monitoring, and energy management for safety and efficiency."},
    { title: 'Leather Processing', image: imag10 , description: "IoT solutions to enhance tanning processes with reduced chemical usage and improved environmental and machine monitoring."},
  ];

  const [itemsToShow, setItemsToShow] = useState(1);
  const [selectedDot, setSelectedDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) { // Full-screen size
        setItemsToShow(3);
        setSelectedDot(0);
      } else if (screenWidth >= 900) { // Medium screen size
        setItemsToShow(2);
        setSelectedDot(0);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setSelectedDot(prevDot => (prevDot + 1) % cards.length);
      }
    }, 5500); // Adjust the interval here (e.g., 5500 milliseconds for 5.5 seconds)

    return () => clearInterval(intervalId);
  }, [isHovered, cards.length]);

  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += itemsToShow) {
    chunkedCards.push(cards.slice(i, i + itemsToShow));
  }

  const cardGroups = chunkedCards.map((chunk, index) => (
    <div key={index} className="card-group">
      {chunk.map((card, cardIndex) => (
        <div 
          key={index * itemsToShow + cardIndex} 
          className="card-item"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {card && <CardS title={card.title} image={card.image} description={card.description} />}
        </div>
      ))}
    </div>
  ));

  return (
    <div className="challenges">
      <p className='title modify'>Industries We Serve</p>
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
          interval={1500} // Set interval to 1.5 seconds
          transitionTime={2000} // Set transition time to move from right to left
          renderIndicator={(clickHandler, isSelected, index, label) => {
            let dotStyle = {
              width: isSelected ? '14px' : (Math.abs(selectedDot - index) === 1 ? '12.6px' : (Math.abs(selectedDot - index) === 2 ? '12.6px' : '11px')),
              height: isSelected ? '14px' : (Math.abs(selectedDot - index) === 1 ? '12.6px' : (Math.abs(selectedDot - index) === 2 ? '12.6px' : '11px')),
              backgroundColor: isSelected ? '#D7D7D7' : 'rgba(255, 255, 255, 0.301)',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              verticalAlign: 'middle' // Align vertically in the middle
            };

            // Check if the current dot is the left dot of the selected dot
            if (index === selectedDot - 1 || (selectedDot === 0 && index === cards.length - 1)) {
              dotStyle.backgroundColor = 'rgba(255, 255, 255, 0.507)';
            }

            // Check if the current dot is the right dot of the selected dot
            if (index === selectedDot + 1 || (selectedDot === cards.length - 1 && index === 0)) {
              dotStyle.backgroundColor = 'rgba(255, 255, 255, 0.507)';
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

export default Serve;
