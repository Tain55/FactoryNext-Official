// import React, { useEffect, useRef } from 'react';
// import './HomePage.css';
// import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
// import Image from './../../Components/2-Image/Image';
// import Transform from './../../Components/3-Transform/Transform';
// import ChallengesTwo from './../../Components/Challenges-2/ChallengesTwo';
// import Core from './../../Components/5-Core/Core';
// import Solutions from './../../Components/6-Solutions/Solutions';
// import Serve from './../../Components/7-Serve/Serve';
// import Footprints from './../../Components/8-Footprints/Footprints';
// import Nutshell from './../../Components/9-Nutshell/Nutshell';
// import Leaders from './../../Components/10-Leaders/Leaders';
// import Blogs from './../../Components/11-Blogs/Blogs';
// import Social from './../../Components/12-Social/Social';
// import Partnership from './../../Components/13-Partnership/Partnership';
// import Footer from '../../Components/14-Footer/Footer';

// const HomePage = () => {
//     const sectionRefs = useRef([]);
//     let scrolling = false;
//     let scrollCount = 0;

//     useEffect(() => {
//         const handleScroll = (event) => {
//             if (!scrolling) {
//                 scrollCount++;
//                 if (scrollCount % 1 === 0) {
//                     scrolling = true;
//                     setTimeout(() => {
//                         if (event.deltaY > 0) {
//                             scrollToNextSection();
//                         } else if (event.deltaY < 0) {
//                             scrollToPrevSection();
//                         }
//                         scrolling = false;
//                     }, 100); // Adjust debounce delay as needed
//                 }
//             }
//         };

//         const scrollToNextSection = () => {
//             const currentSectionIndex = getCurrentSectionIndex();
//             if (currentSectionIndex < sectionRefs.current.length - 1) {
//                 const nextSectionTop = sectionRefs.current[currentSectionIndex + 1].offsetTop;
//                 smoothScrollTo(nextSectionTop);
//             }
//         };

//         const scrollToPrevSection = () => {
//             const currentSectionIndex = getCurrentSectionIndex();
//             if (currentSectionIndex > 0) {
//                 const prevSectionTop = sectionRefs.current[currentSectionIndex - 1].offsetTop;
//                 smoothScrollTo(prevSectionTop);
//             }
//         };

//         const getCurrentSectionIndex = () => {
//             return sectionRefs.current.findIndex(ref => ref.getBoundingClientRect().top >= 0);
//         };

//         const smoothScrollTo = (targetPosition) => {
//             const startPosition = window.pageYOffset;
//             const distance = targetPosition - startPosition;
//             const duration = 900; // Adjust duration as needed
//             let start = null;

//             const step = (timestamp) => {
//                 if (!start) start = timestamp;
//                 const progress = timestamp - start;
//                 window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
//                 if (progress < duration) {
//                     requestAnimationFrame(step);
//                 }
//             };

//             requestAnimationFrame(step);
//         };

//         const easeInOut = (t, b, c, d) => {
//             // Adapted from Robert Penner's easing equations
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         };

//         window.addEventListener('wheel', handleScroll);

//         return () => {
//             window.removeEventListener('wheel', handleScroll);
//         };
//     }, []);

//     const scrollToTop = () => {
//         smoothScrollTo(0);
//     };

//     const scrollToBottom = () => {
//         const bottomSectionTop = sectionRefs.current[sectionRefs.current.length - 1].offsetTop;
//         smoothScrollTo(bottomSectionTop);
//     };

//     return (
//         <div className='homepage'>
//             <NavigationBar/>
//             <button className="scroll-button top" onClick={scrollToTop}>Go to Top</button>
//             <button className="scroll-button bottom" onClick={scrollToBottom}>Go to Bottom</button>
//             <div ref={ref => sectionRefs.current[0] = ref} className='section'>
//                 <Image/>
//             </div>
//             <div ref={ref => sectionRefs.current[1] = ref} className='section'>
//                 <Transform/>
//             </div>
//             <div ref={ref => sectionRefs.current[2] = ref} className='section'>
//                 <ChallengesTwo/>
//             </div>
//             <div ref={ref => sectionRefs.current[3] = ref} className='section'>
//                 <Core/>
//             </div>
//             <div ref={ref => sectionRefs.current[4] = ref} className='section'>
//                 <Solutions/>
//             </div>
//             <div ref={ref => sectionRefs.current[5] = ref} className='section'>
//                 <Serve/>
//             </div>
//             <div ref={ref => sectionRefs.current[6] = ref} className='section'>
//                 <Footprints/>
//             </div>
//             <div ref={ref => sectionRefs.current[7] = ref} className='section'>
//                 <Nutshell/>
//             </div>
//             <div ref={ref => sectionRefs.current[8] = ref} className='section'>
//                 <Leaders/>
//             </div>
//             <div ref={ref => sectionRefs.current[9] = ref} className='section'>
//                 <Blogs/>
//             </div>
//             <div ref={ref => sectionRefs.current[10] = ref} className='section'>
//                 <Social/>
//             </div>
//             <div ref={ref => sectionRefs.current[11] = ref} className='section'>
//                 <Partnership/>
//             </div>
//             <div ref={ref => sectionRefs.current[12] = ref} className='section'>
//                 <Footer/>
//             </div>
//         </div>
//     );
// };

// export default HomePage;








import React, { useEffect, useRef } from 'react';
import './HomePage.css';
import NavigationBar from './../../Components/1-NavigationBar/NavigationBar';
import Image from './../../Components/2-Image/Image';
import Transform from './../../Components/3-Transform/Transform';
import ChallengesTwo from './../../Components/Challenges-2/ChallengesTwo';
import Core from './../../Components/5-Core/Core';
import Solutions from './../../Components/6-Solutions/Solutions';
import Serve from './../../Components/7-Serve/Serve';
import Footprints from './../../Components/8-Footprints/Footprints';
import Nutshell from './../../Components/9-Nutshell/Nutshell';
import Leaders from './../../Components/10-Leaders/Leaders';
import Blogs from './../../Components/11-Blogs/Blogs';
import Social from './../../Components/12-Social/Social';
import Partnership from './../../Components/13-Partnership/Partnership';
import Footer from '../../Components/14-Footer/Footer';

const HomePage = () => {
    const sectionRefs = useRef([]);
    let scrolling = false;
    let scrollCount = 0;

    useEffect(() => {
        const handleScroll = (event) => {
            if (!scrolling) {
                scrollCount++;
                if (scrollCount % 2 === 0) {
                    scrolling = true;
                    setTimeout(() => {
                        if (event.deltaY > 0) {
                            scrollToNextSection();
                        } else if (event.deltaY < 0) {
                            scrollToPrevSection();
                        }
                        scrolling = false;
                    }, 100); // Adjust debounce delay as needed
                }
            }
        };

        const scrollToNextSection = () => {
            const currentSectionIndex = getCurrentSectionIndex();
            if (currentSectionIndex < sectionRefs.current.length - 1) {
                const nextSectionTop = sectionRefs.current[currentSectionIndex + 1].offsetTop;
                smoothScrollTo(nextSectionTop);
            }
        };

        const scrollToPrevSection = () => {
            const currentSectionIndex = getCurrentSectionIndex();
            if (currentSectionIndex > 0) {
                const prevSectionTop = sectionRefs.current[currentSectionIndex - 1].offsetTop;
                smoothScrollTo(prevSectionTop);
            }
        };

        const getCurrentSectionIndex = () => {
            return sectionRefs.current.findIndex(ref => ref.getBoundingClientRect().top >= 0);
        };

        const smoothScrollTo = (targetPosition) => {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 900; // Adjust duration as needed
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        const easeInOut = (t, b, c, d) => {
            // Adapted from Robert Penner's easing equations
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        smoothScrollTo(0);
    };

    const scrollToBottom = () => {
        const bottomSectionTop = sectionRefs.current[sectionRefs.current.length - 1].offsetTop;
        smoothScrollTo(bottomSectionTop);
    };

    return (
        <div className='homepage'>
            <NavigationBar/>
            <Image/>
            <Transform/>
            <ChallengesTwo/>
            <Core/>
            <Solutions/>
            <Serve/>
            <Footprints/>
            <Nutshell/>
            <Leaders/>
            <Blogs/>
            <Social/>
            <Partnership/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;

