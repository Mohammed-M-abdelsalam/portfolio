import cv from '../../assets/pdf/cv.pdf';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
            <div>
                <div className="container text-center py-5">
                    <main>
                        <h1 className="fw-bold">Get in touch</h1>
                        <p>Feel free to reach out! Whether you have a question, a project idea, or just want to connect, I’d love to hear from you. I’m always open to new opportunities and collaborations. You can use the form below or contact me directly via email or social media.</p>
                        <a className="btn" href={cv} download={'Mohamed_Magdy_CV.pdf'}>download cv</a>       
                    </main>   
                </div>
            </div>
            <ContactForm />
        </>
    )
}

export default Contact