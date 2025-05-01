import { useState } from 'react';
import './contact-form.css';

function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='container'>
        <form className='contact-form mx-auto mb-4' action="https://formsubmit.co/0a2888d80945f4875d5d435ecfd0e291" method="POST">
        <h3 className='text-white'>Contact Me</h3>
        <input type="hidden" name="_captcha" value="false"></input>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
        ></textarea>
        <button className='btn mt-3 mx-auto' type="submit">Send</button>
        </form>
    </div>
  );
};

export default ContactForm;
