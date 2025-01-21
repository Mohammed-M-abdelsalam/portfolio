import { useEffect, useRef, useState } from 'react';
import './dots.css';

function Dots({target}){
    const [active, setActive] = useState(null);
    const countRef = useRef([])
    useEffect(() => {
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if(entry.isIntersecting){
                        setActive(id);
                    }
                });            
            } , {threshold: 0.75});  
            document.querySelectorAll(target).forEach((section, index) => {
                observer.observe(section);
                countRef.current[index] = index+1;
            });
            
            return () => {
                observer.disconnect();
            }
        }
    , []);
    function handleClick(e) {
        const section = e.target.dataset.section;
        setActive(section);
        document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });    
    }

    return (
        <div className="dots">
            {   
                countRef.current.map(el => <div key={el} data-section={`section${el}`} className={active !== null && active === `section${el}` ? 'active dot' : 'dot'} onClick={handleClick}></div>)
            }
        </div>
    );

}


export default Dots