import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    const envelope = <FontAwesomeIcon icon={faEnvelopeOpen} />
    return (
        <div className='mt-5 mb-5' id="contact">
            <h1 className='text-center mb-2'>Get In <span className="span">Touch</span></h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <input className='w-100' type="text" placeholder='Your Name' /><br /><br />
                        <input className='w-100' type="email" placeholder='Your Mail' /><br /><br />
                        <input className='w-100' type="text" placeholder='Subjects' /><br /><br />
                        <textarea className='w-100' name="" id="" rows="8"></textarea>
                        <button className='btn btn-primary'>Send Message</button>
                    </div>
                    <div className="col-md-5 ps-5 mt-5">
                        <p> {location}  Road No:"112",Building No: "56" Munabbor shaha Building, Hajigong, Chandpur.</p>
                        <p> {phone}  +8801854-427358</p>
                        <p> {envelope}  andormohol4@gamil.com</p>
                        <button className='btn btn-primary'>Click To More Information</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;