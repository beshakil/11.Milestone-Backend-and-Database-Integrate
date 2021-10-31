import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const arrow = <FontAwesomeIcon icon={faCaretRight} />
    return (
        <div className=' footer'>
            <div className=" container row footer-style">
                <div className="col-md-6">
                    <div className="footer-cont">
                        <h1> Classic Travel Agency</h1>
                        <div className="address pe-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia laudantium.</p>
                            <p>{mapMarker} 123 West Street, Melbourne Victoria 2000 Australia</p>
                            <p>{envelope} www.devitems@gmail.com Fax:+ (123) 123 321 345</p>
                        </div>
                    </div>

                </div>

                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1>Tour Package</h1>
                        <div className="address">
                            <p>{arrow} Dhaka To USA</p>
                            <p>{arrow} Dhaka To Canada</p>
                            <p>{arrow} Dhaka To India</p>
                            <p>{arrow} Dhaka To UEK</p>
                            <p>{arrow} Dhaka To Kalkata</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-cont">
                        <h1>Subscribe</h1>
                        <div className="address">
                            <input type="text" placeholder='@example.gmail.com' /> <br />
                            <button className='btn btn-primary mt-3'>Send</button>
                            <div className="icons">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;