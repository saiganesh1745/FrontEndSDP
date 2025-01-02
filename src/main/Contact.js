
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    user_mail: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_onqa51f", "template_7ux110i", formData, "vOHgsy753ZqMESJsr")
      .then((response) => {
        console.log('Email sent:', response);
        toast.success('Message sent successfully!');
      }, (error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send the message, please try again later.');
      });

    e.target.reset();
  };

  return (
    <div className='input' >
    <div className="backgroundc">
      <div className="containerc">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : support@SDP.com</div>
            </div>
            <div className="screen-body-item">
              <form className="app-form" onSubmit={handleSubmit}>
                <div className="app-form-group">
                  <input 
                    type="text" 
                    name="from_name" 
                    className="app-form-control" 
                    placeholder="NAME" 
                    value={formData.from_name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="app-form-group">
                  <input 
                    type="email" 
                    name="user_mail" 
                    className="app-form-control" 
                    placeholder="EMAIL" 
                    value={formData.user_mail} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="app-form-group message">
                  <textarea 
                    name="message" 
                    className="app-form-control" 
                    placeholder="MESSAGE" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="app-form-group buttons">
                  <button type="reset" className="app-form-button">CANCEL</button>
                  <button type="submit" className="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    <Footer />
      <ToastContainer />
    </div>
    </div>
  );
}
