import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Leaders.css';
import CardL from './CardLeader';
import image1 from '../Images/Leaders/jamil.jpeg';
import image2 from '../Images/Leaders/arif sir.jpg';
import image3 from '../Images/Leaders/mamun.png'


const Leaders = () => {

  return (
    <div>
      <p className='title ourLearTitleMore'>Our Leaders</p>
      <div className='Leaders'>
          <CardL title1={'Insan Arafat Jamil'} title2={'Founder & CEO'} image={image1} />
          <CardL title1={'Dr. Arif Iftakher Mahmood'} title2={'Co-founder & Adviser'} image={image2} />
          <CardL title1={'Abdullah Al Mamun'} title2={'Co-founder & Adviser'} image={image3} />
      </div>
    </div>
    
  );




  // const cards = [
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  //   { title1: 'Nurun Nokib Anim', title2: 'Business Analyst', image: image2 },
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  //   { title1: 'Nurun Nokib Anim', title2: 'Business Analyst', image: image2 },
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  //   { title1: 'Nurun Nokib Anim', title2: 'Business Analyst', image: image2 },
  //   { title1: 'Insan Arafat Jamil', title2: 'Founder & CEO', image: image1 },
  // ];

  // const [itemsToShow, setItemsToShow] = useState(1);
  // const [selectedDot, setSelectedDot] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth >= 1170) { // Full-screen size
  //       setItemsToShow(3);
  //       setSelectedDot(0);
  //     } else if (screenWidth >= 800) { // Medium screen size
  //       setItemsToShow(2);
  //       setSelectedDot(0);
  //     } else { // Small screen size
  //       setItemsToShow(1);
  //     }
  //   };

  //   handleResize(); // Initial call to set initial items to show

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!isHovered) {
  //       setSelectedDot(prevDot => (prevDot + 1) % cards.length);
  //     }
  //   }, 5500); // Adjust the interval here (e.g., 5500 milliseconds for 5.5 seconds)

  //   return () => clearInterval(intervalId);
  // }, [isHovered, cards.length]);

  // const chunkedCards = [];
  // for (let i = 0; i < cards.length; i += itemsToShow) {
  //   chunkedCards.push(cards.slice(i, i + itemsToShow));
  // }

  // const cardGroups = chunkedCards.map((chunk, index) => (
  //   <div key={index} className="card-group">
  //     {chunk.map((card, cardIndex) => (
  //       <div
  //         key={index * itemsToShow + cardIndex}
  //         className="card-item"
  //         onMouseEnter={() => setIsHovered(true)}
  //         onMouseLeave={() => setIsHovered(false)}
  //       >
  //         {card && <CardL title1={card.title1} title2={card.title2} image={card.image} />}
  //       </div>
  //     ))}
  //   </div>
  // ));

  // return (
  //   <div className="challenges Leader">
  //     <p className='title'>Our Leaders</p>
  //     <div className='challenge-cards'>
  //       <Carousel className='carousel'
  //         showArrows={false} // Hide arrow buttons
  //         showThumbs={false}
  //         showStatus={false}
  //         infiniteLoop={true}
  //         swipeable={true}
  //         emulateTouch={true}
  //         showIndicators={true}
  //         width="100%"
  //         selectedItem={selectedDot}
  //         onChange={setSelectedDot}
  //         interval={1500} // Set interval to 1.5 seconds
  //         transitionTime={2000} // Set transition time to move from right to left
  //         renderIndicator={(clickHandler, isSelected, index, label) => {
  //           let dotStyle = {
  //             width: isSelected ? '14px' : (Math.abs(selectedDot - index) === 1 ? '12.6px' : (Math.abs(selectedDot - index) === 2 ? '12.6px' : '11px')),
  //             height: isSelected ? '14px' : (Math.abs(selectedDot - index) === 1 ? '12.6px' : (Math.abs(selectedDot - index) === 2 ? '12.6px' : '11px')),
  //             backgroundColor: isSelected ? '#393536' : '#CFCFCF',
  //             borderRadius: '50%',
  //             display: 'inline-block',
  //             margin: '0 5px',
  //             cursor: 'pointer',
  //             verticalAlign: 'middle' // Align vertically in the middle
  //           };

  //           // Check if the current dot is the left dot of the selected dot
  //           if (index === selectedDot - 1 || (selectedDot === 0 && index === cards.length - 1)) {
  //             dotStyle.backgroundColor = '#7B7979';
  //           }

  //           // Check if the current dot is the second left dot of the selected dot
  //           if ((index === selectedDot - 2 && selectedDot !== 1) || (selectedDot === 0 && index === cards.length - 2)) {
  //             dotStyle.backgroundColor = '#CFCFCF';
  //           }

  //           // Check if the current dot is the right dot of the selected dot
  //           if (index === selectedDot + 1 || (selectedDot === cards.length - 1 && index === 0)) {
  //             dotStyle.backgroundColor = '#7B7979';
  //           }

  //           if (index === selectedDot + 2 || (selectedDot === cards.length - 1 && index === 0)) {
  //             dotStyle.backgroundColor = '#CFCFCF';
  //           }

  //           return (
  //             <li
  //               style={dotStyle}
  //               onClick={clickHandler}
  //               key={index}
  //               aria-label={`Go to slide ${index}`}
  //               title={label}
  //             ></li>
  //           );
  //         }}
  //       >
  //         {cardGroups}
  //       </Carousel>
  //     </div>
  //   </div>
  // );

  

  
};

export default Leaders;
