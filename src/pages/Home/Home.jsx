import Dots from './Dots';
import HomeMain from './Main';
import StandoutSection from './StandoutSection';
import WhyHireSection from './WhyHireSection/WhyHireSection';
import ContactSection from './ContactSection/ContactSection';

function Home() {
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