import { useEffect, useState } from 'react';
import Dots from './Dots';
import HomeMain from './Main';
import StandoutSection from './StandoutSection';
import WhyHireSection from './WhyHireSection/WhyHireSection';
import ContactSection from './ContactSection/ContactSection';

function Home() {
    // const [target, setTarget] = useState([])
    // useEffect(()=>{
    //     setTarget(document.querySelectorAll('.section-home'))
    // }, [])
    return (
        <>
            <Dots target={'.section-home'}  />
            <HomeMain />
            <WhyHireSection />
            <StandoutSection />
            <ContactSection />
        </>
    )
}
export default Home;