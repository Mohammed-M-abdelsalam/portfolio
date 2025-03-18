import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function useAnimation(targets, object, options=null, unObserve=true) {
    useGSAP(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, object);
              unObserve && observer.unobserve(entry.target); 
            }
          });
        }, options);
    
        targets.forEach((el) => observer.observe(el));
    
        return () => {
          observer.disconnect(); 
        };
      }, []); 
}

export default useAnimation;