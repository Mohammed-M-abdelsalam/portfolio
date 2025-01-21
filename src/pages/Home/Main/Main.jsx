import { useRef } from 'react';
import img from '../../../assets/images/personal.png'
import Button from '../../../components/Button'
import './main.css'
import useAnimation from '../../../hooks/useAnimation';

function HomeMain() {
    const imgRef = useRef([]), nameRef = useRef([]);
    const animationObj = {
        duration: 1,
        opacity: 0,
        y: 50,
        x: -50,
        rotate: 10,
        scale: 0.5,
        ease: 'power2.inOut',
    }
    const animationObj2 = {
        duration: 2,
        width: 20,
        ease: 'power2.inOut',
        onComplete : () => {
            nameRef.current[0].style.border = 'none';
        }
    }

    useAnimation(imgRef.current, animationObj);
    useAnimation(nameRef.current, animationObj2);

    const btnCallback = () => {
        document.querySelector('#section4').scrollIntoView({behavior:'smooth'})
    }
    return (
        <header id='section1' className='section-home'>
            <main>
                <div className="text">
                    <h1>Hi <br /> I&apos;m <span ref={el => {nameRef.current[0] = el}} className='name'>Mohamed Magdy</span></h1>
                    <p>Aspiring front-end developer with solid  foundation in web development and a passion for building robust, responsive web appications</p>
                    <Button callback={btnCallback}> get in touch </Button>
                </div>
                <div className="img">
                    <img ref={el => {imgRef.current[0] = el}} src={img} alt="personal photo" width={"100%"} />
                </div>
            </main>
        </header>
    )
}    

export default HomeMain