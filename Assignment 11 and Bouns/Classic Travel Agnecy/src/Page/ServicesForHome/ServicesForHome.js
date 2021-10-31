import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceForHome from '../ServiceForHome/ServiceForHome';
import './ServicesForHome.css'

const ServicesForHome = () => {
    const [services, setServices] = useState([])
    const serviceSlice = services.slice(0, 6)

    useEffect(() =>
        fetch('https://spooky-dungeon-32470.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])

    return (
        <div className="container">

            <div className="text-center">
                <h1 className='pb-4'>Our All <span className="span">Tour Services</span></h1>
            </div>


            <div className="row g-5">
                {
                    serviceSlice.map((service => <ServiceForHome
                        key={service._id}
                        service={service}>
                    </ServiceForHome>))
                }
            </div>
            <div className="text-center pt-3">
                <Link id='menu-items' to="/services">
                    <button className="btn btn-primary"><h4 className="pt-2">View All Services</h4></button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesForHome;