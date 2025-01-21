import './contact-section.css';
function ContactSection() {
    return (
        <section id='section4' className="contact-section section-home">
            <div className="container">
                <div className="contact">
                    <h2 id='contact'> CONTACT </h2>
                    <ul aria-labelledby='contact'>
                        <li>
                            <a href='mailto:mo.magdyabdelsalam@gmail.com' aria-label="Send an email to mo.magdyabdelsalam@gmail.com">mo.magdyabdelsalam@gmail.com</a>
                        </li>
                        <li>
                            <a href="tel:+201008840871" aria-label="Call 01008840871">01008840871</a>
                        </li>
                    </ul>
                </div>
                <div className="socials">
                    <h2 id='socials'> SOCIALS </h2>
                    <ul aria-labelledby='socials'>
                        <li>
                            <a href='https://github.com/Mohammed-M-abdelsalam' target="_blank">github</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/mohammed-m-abdelsalam/' target="_blank">linkedin</a>
                        </li>
                        <li>
                            <a href='https://wa.me/201008840871' target="_blank">whatsapp</a>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;