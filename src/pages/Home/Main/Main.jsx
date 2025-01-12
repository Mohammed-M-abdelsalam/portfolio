import img from '../../../assets/images/personal.png'
import Button from '../../../components/Button'
import './main.css'
function HomeMain() {
    return (
        <header>
            <main>
                <div className="text">
                    <h1>Hi <br /> I&apos;m <span className='name'>Mohamed Magdy</span></h1>
                    <p>Aspiring front-end developer with solid  foundation in web development and a passion for building robust, responsive web appications</p>
                    <Button> get in touch </Button>
                </div>
                <div className="img">
                    <img src={img} alt="personal photo" width={"200"} />
                </div>
            </main>
        </header>
    )
}    

export default HomeMain