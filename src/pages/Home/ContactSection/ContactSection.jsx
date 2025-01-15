import './contact-section.css';
function ContactSection() {
    return (
        <section id='section4' className="contact-section section-home">
            <div className="container">
                <div className="contact">
                    <h2> CONTACT </h2>
                    <a href='mailto:mo.magdyabdelsalam@gmail.com'>mo.magdyabdelsalam@gmail.com</a>
                </div>
                <div className="socials">
                    <h2> SOCIALS </h2>
                    <a href='https://github.com/Mohammed-M-abdelsalam' target="_blank">github</a>
                    <br />
                    <a href='' target="_blank">linkedin</a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;