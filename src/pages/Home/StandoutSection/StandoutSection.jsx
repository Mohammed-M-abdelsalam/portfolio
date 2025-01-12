import SimpleCards from '../../../components/SimpleCards/SimpleCards';
import './standout-section.css'
function StandoutSection() {
    const cardData = [
        {title: "Attention to Details", content: "I ensure every pixel is perfect and every interaction is seamless, delivering polished, high-quality designs."},
        {title: "Modern Development Skills", content: "Proficient in frameworks like ReactJS and tools like Chrome DevTools, I stay updated with the latest technologies and best practices in front-end development."},
        {title: "Team Player", content: "With experience collaborating with back-end developers and designers, I excel at integrating creative ideas into cohesive solutions."},
    ]
    return (
        <div className="standout-section">
            <div className="container">
                <h2>STAND OUT</h2>
                <SimpleCards data={cardData} />
            </div>
        </div>
    );
}

export default StandoutSection