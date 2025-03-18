import { useRef } from 'react';
import img from '../../../assets/images/p.png'
import Button from '../../../components/Button'
import './main.css'
import useAnimation from '../../../hooks/useAnimation';

function HomeMain() {
    const nameRef = useRef([]);

    const animationObj = {
        duration: 4,
        width: '100%',
        ease: 'power2.inOut',
        onComplete : () => {
            nameRef.current[0].style.border = 'none';
        }
    }

    useAnimation(nameRef.current, animationObj);

    const btnCallback = () => {
        document.querySelector('#section4').scrollIntoView({behavior:'smooth'})
    }
    return (
        <header id='section1' className='section-home'>
            <main className='container vh-100 d-flex justify-content-center align-items-center'>
                <div className="row row-cols-lg-2 g-5 flex-column-reverse flex-lg-row justify-content-between align-items-center">
                    <div className="text">
                        <h1 className='position-relative'>Hi <br /> I&apos;m <span ref={el => {nameRef.current[0] = el}} className='name fw-bold position-absolute overflow-hidden px-2'>Mohamed Magdy</span></h1>
                        <p>Aspiring front-end developer with solid  foundation in web development and a passion for building robust, responsive web appications</p>
                        <Button callback={btnCallback}> get in touch </Button>
                    </div>
                    <div className='img overflow-hidden rounded-2 p-0' style={{width: '300px', maxHeight: '300px'}}>
                        <img width={'100%'} src={img} alt="personal photo" />
                    </div>
                </div>
            </main>
        </header>
    )
}    

export default HomeMain