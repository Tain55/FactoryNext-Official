import React from 'react';
import './OurSolutions.css'
import NavigationBar from '../../Components/1-NavigationBar/NavigationBar';
import Footer from '../../Components/14-Footer/Footer';
import OurSolutionCard from './../../Components/26-OurSolutionCard/OurSolutionCard';
import OurSolutionBanner from './../../Components/27-OurSolutionBanner/OurSolutionBanner';
import Solutions from '../../Components/6-Solutions/Solutions';
import { Mousewheel, Pagination, Keyboard} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ClipLoader } from 'react-spinners';


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const OurSolutons = () => {
    const component = useRef();
  const slider = useRef();

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: () => "+=" + slider.current.offsetWidth
  //       }
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });


    const handleSlideChange = (swiper) => {
        if (swiper.isEnd) {
            // Scroll down to the next section on the next scroll event
            window.scrollBy({
                top: window.innerHeight, // Scroll down by the height of the viewport
                behavior: 'smooth'
            });
        }
    };

    const handleReachBeginning = (swiper) => {
        if (swiper.isBeginning) {
            // Scroll to the top section on the next scroll event
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='homepage'>
            <NavigationBar/>
            <div className=''>
                <OurSolutionBanner/>
            </div>
            <div className=''>
                <Solutions/>
             </div>

{/* new com  */}
{/* <div className="App" ref={component}>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div> */}
            
            <div className=''>
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                keyboard={{ enabled: true }}
                modules={[Mousewheel, Pagination, Keyboard]}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onReachBeginning={handleReachBeginning}
                className="mySwiper"
            >
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                    <SwiperSlide><OurSolutionCard/></SwiperSlide>
                </Swiper>
            </div>
            <div className=''>
                <Footer/>
            </div>
        </div>
    );
};

export default OurSolutons;