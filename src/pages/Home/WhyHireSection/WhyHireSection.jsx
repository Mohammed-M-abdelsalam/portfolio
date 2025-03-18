import './why-hire-section.css'
import { useRef } from 'react';
import useAnimation from '../../../hooks/useAnimation';
function WhyHireSection() {
    let containerRef = useRef([]);
    const animationObj = {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut',
    };
    useAnimation(containerRef.current, animationObj, {threshold: 0.5});

    return (
        <section tabIndex={0} aria-label='why hire me' id='section2' className="why-hire-section section-home">
            <div ref={el => (containerRef.current[0] = el)} className="why-hire-container container vh-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div>
                        <h2 className='fw-bold pb-3'>WHY HIRE ME?</h2>
                        <p tabIndex={0} className='lead'>
                        As a passionate front-end developer, I thrive on creating immersive, responsive, and visually striking web experiences that seamlessly blend design and functionality. With expertise in HTML, CSS, JavaScript, and React, I transform concepts into dynamic, high-performance websites that captivate users and enhance engagement. My meticulous attention to detail ensures every interface is not only aesthetically appealing but also intuitive, accessible, and optimized for speed. I am driven by a relentless pursuit of innovation, continuously exploring new technologies and best practices to push the boundaries of front-end development and craft exceptional digital experiences.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );    
}

export default WhyHireSection