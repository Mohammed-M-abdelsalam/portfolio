import './main.css'
import img from '../../../assets/images/skills/soft-skills.gif'
function Main(){
    return (
        <main className='container py-3 d-flex justify-content-center align-items-center' style={{minHeight: '80vh'}}>
            <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center justify-content-center">
                <div>
                    <div className='rounded-circle overflow-hidden'>
                        <img src={img} width={'100%'} alt="a picture showing people working together and comunicating" />
                    </div>
                </div>
                <div>
                    <h1 className='' style={{fontSize: '3rem'}}>My Skills</h1>
                    <p className='fw-bold' style={{fontSize: '1.5rem'}}>Bringing ideas to life with clean code and seamless design</p>
                    <p className='fs-6'>I&apos;ve been honing my skills in web development for a year now, and I&apos;m excited to share my progress with you!</p>
                </div>
            </div>
        </main>
    );
}

export default Main;