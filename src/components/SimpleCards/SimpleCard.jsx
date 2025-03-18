import { useRef } from 'react';
import './simplecard.css';
import useAnimation from '../../hooks/useAnimation';
function SimpleCard({ data, index}) {
      let cardRef = useRef([]);
      const animationObj = {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.inOut',
        delay: data.index ? data.index * 0.2 : 0,
      };
      useAnimation(cardRef.current, animationObj, {threshold: 0.1});
  return (
    <div>
      <div className="card overflow-hidden position-relative" ref={el => (cardRef.current[0] = el)} style={{  minHeight: '200px' }} aria-label={data.title} tabIndex={0}>
        <div className="card-body d-flex flex-column justify-content-center">
          <h3 className="card-title fs-4 fw-bold"> {data.title} </h3>
          <p className="card-text"> {data.content} </p>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
