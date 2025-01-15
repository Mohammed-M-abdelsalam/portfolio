import './simplecards.css';
import { useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

function SimpleCards({ data }) {
  const cardRefs = useRef([]);
  useAnimation(cardRefs.current, {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: 'power2.inOut',
    },
  { threshold: 0, rootMargin: '50px' }, false);

  return (
    <div className="simple-cards">
      {data.map((el, index) => (
        <div
          key={index}
          className="card"
          aria-label={el.title}
          ref={(el) => (cardRefs.current[index] = el)}
        >
          <h3>{el.title}</h3>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SimpleCards;



// import './simplecards.css'
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';

// function SimpleCards({data}) {
//     useGSAP(()=>{
//         gsap.from('.card', 
//         {
//             duration: 1,
//             opacity: 0,
//             y: 50,
//             stagger: 0.2,
//             ease: 'power2.inOut',
//         })    
//     })
//     return (
//         <div className="simple-cards">
//             {
//                 data.map((el, index) =>{
//                     return(
//                         <div key={index} className="card" aria-label={el.title}>
//                             <h3>{el.title}</h3>
//                             <p>{el.content}</p>
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// }

// export default SimpleCards