import './contact-section.css';
function ContactSection() {
    return (
        <section id='section4' className="contact-section section-home">
            <div className="container">
                <div className="contact">
                    <h2> CONTACT </h2>
                    <a href='mailto:mo.magdyabdelsalam@gmail.com'>mo.magdyabdelsalam@gmail.com</a>
                    <a href="tel:01008840871">01008840871</a>
                </div>
                <div className="socials">
                    <h2> SOCIALS </h2>
                    <a href='https://github.com/Mohammed-M-abdelsalam' target="_blank">github</a>
                    <a href='https://www.linkedin.com/in/mohammed-m-abdelsalam/' target="_blank">linkedin</a>
                    <a href='https://wa.me/01008840871' target="_blank">whatsapp</a>
                    <br />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;