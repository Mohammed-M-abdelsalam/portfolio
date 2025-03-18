import SimpleCard from '../../../components/SimpleCards/SimpleCard';
import './standout-section.css'
function StandoutSection() {
    const cardData = [
        {title: "Attention to Details", content: "I ensure every pixel is perfect and every interaction is seamless, delivering polished, high-quality designs."},
        {title: "Modern Development", content: "Proficient in frameworks like ReactJS and tools like Chrome DevTools, I stay updated with the latest technologies and best practices."},
        {title: "Team Player", content: "With experience collaborating with back-end developers and designers, I excel at integrating creative ideas into cohesive solutions."},
    ]
    return (
        <section tabIndex={0} aria-label='why i stand out' id='section3' className="standout-section section-home d-flex align-items-center py-5" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className='fw-bold pb-5'>WHY I STAND OUT</h2>
                <div className='row row-cols-lg-3 g-4 justify-content-start align-items-start'>
                    {
                    cardData.map((el, index) => <SimpleCard data={{ ...el, index }} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default StandoutSection