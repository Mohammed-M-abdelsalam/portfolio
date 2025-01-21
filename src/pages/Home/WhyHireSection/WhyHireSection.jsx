import './why-hire-section.css'
import { useRef } from 'react';
import useAnimation from '../../../hooks/useAnimation';
function WhyHireSection() {
    let containerRef = useRef([]);
    const animationObj = {
        duration: 1,
        opacity: 0,
        ease: 'power2.inOut',
    };
    useAnimation(containerRef.current, animationObj, { threshold: 0.3, rootMargin: '50px' });

    return (
        <section tabIndex={0} aria-label='why hire me' id='section2' className="why-hire-section section-home">
            <div ref={el => (containerRef.current[0] = el)} className="container">
                <h2>WHY HIRE ME?</h2>
                <p tabIndex={0}>
                    As a passionate front-end developer, I specialize in crafting user-friendly, responsive, and visually appealing web interfaces.
                    My deep understanding of HTML, CSS, and JavaScript, 
                    and react allows me to transform ideas into dynamic, functional websites that provide exceptional user experiences.
                </p>
            </div>
        </section>
    );    
}

export default WhyHireSection