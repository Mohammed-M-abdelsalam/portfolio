import './contact-section.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
function ContactSection() {
    return (
        <section id='section4' className="contact-section section-home pt-5">
            <div className="container-fluid">
                <div className="row row-cols-1">
                    <div className="col text-center">
                        <div className="contact">
                            <h2 id='contact'> CONTACT </h2>
                            <ul className='list-unstyled' aria-labelledby='contact'>
                                <li className='mb-3'>
                                    <a className='text-decoration-none' href='mailto:mo.magdyabdelsalam@gmail.com' aria-label="Send an email to mo.magdyabdelsalam@gmail.com">mo.magdyabdelsalam@gmail.com</a>
                                </li>
                                <li>
                                    <a className='text-decoration-none' href="tel:+201008840871" aria-label="Call 01008840871">01008840871</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col text-center mt-3">
                        <div className="socials d-md-flex justify-content-around align-items-center py-3">
                            <h2 id='socials' className='m-0'> SOCIALS </h2>
                            <ul className='list-unstyled d-flex justify-content-center mt-3' aria-labelledby='socials'>
                                <li>
                                    <a className='text-decoration-none' href='https://github.com/Mohammed-M-abdelsalam' target="_blank">
                                        <FaGithub className='fs-3'/>
                                    </a>
                                </li>
                                <li className='mx-3'>
                                    <a className='text-decoration-none' href='https://www.linkedin.com/in/mohammed-m-abdelsalam/' target="_blank">
                                        <FaLinkedin className='fs-3'/>
                                    </a>
                                </li>
                                <li>
                                    <a className='text-decoration-none' href='https://wa.me/201008840871' target="_blank">
                                        <FaWhatsapp className='fs-3'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;